import { BleClient } from '@capacitor-community/bluetooth-le';
import { Capacitor } from '@capacitor/core';
const NUS='6e400001-b5a3-f393-e0a9-e50e24dcca9e',RX='6e400002-b5a3-f393-e0a9-e50e24dcca9e',TX='6e400003-b5a3-f393-e0a9-e50e24dcca9e';
if (Capacitor.isNativePlatform()) {
  window.NativeBle = {
    async connect(onText, onDisconnect) {
      await BleClient.initialize({ androidNeverForLocation: true });
      const d = await BleClient.requestDevice({ services: [NUS] });
      await BleClient.connect(d.deviceId, () => onDisconnect());
      const dec = new TextDecoder();
      await BleClient.startNotifications(d.deviceId, NUS, TX, v => onText(dec.decode(v)));
      return { id: d.deviceId, name: d.name };
    },
    async write(id, text) {
      const b = new TextEncoder().encode(text);
      for (let i = 0; i < b.length; i += 20) {
        const c = b.slice(i, i + 20);
        await BleClient.writeWithoutResponse(id, NUS, RX, new DataView(c.buffer, c.byteOffset, c.byteLength));
      }
    },
    disconnect(id) { return BleClient.disconnect(id); }
  };
}
