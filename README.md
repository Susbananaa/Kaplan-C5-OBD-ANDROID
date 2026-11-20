# C5-OBD Android uygulaması

## Yol 1: GitHub ile (bilgisayara kurulum gerekmez)
1. Bu klasörü yeni bir GitHub deposuna yükle (main dalı).
2. Depoda Actions > "APK derle" > Run workflow.
3. Bitince çalıştırma sayfasındaki Artifacts bölümünden `c5-obd-apk` indir, içindeki `app-debug.apk` dosyasını telefona kopyala ve kur ("bilinmeyen kaynaklardan kuruluma izin ver").

## Yol 2: Kendi bilgisayarında
Gerekenler: Node 20, JDK 17, Android SDK (Android Studio ile gelir).
    npm install
    npm run android:add
    npm run android:apk
APK: android/app/build/outputs/apk/debug/app-debug.apk

## Notlar
- Android 12+ ilk bağlanışta "Yakındaki cihazlar" iznini ister.
- Arayüz www/index.html, yerel BLE köprüsü src/ble.js. Tarayıcıda açılırsa Web Bluetooth'a, uygulamada yerel BLE'ye düşer.
