# Badeli Design

React + JavaScript + CSS ile hazırlanmış, krem ve beyaz tonlarında mobil uyumlu ürün vitrini. Satış, ödeme ve üyelik içermez. Kategori filtreleri, Türkçe arama, ürün detay pencereleri ve Instagram iletişim bağlantıları vardır.

## Geliştirme

Node.js 22.12+ veya 24 kullanın.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

## Ürünleri düzenleme

`src/products.js` içinde ürün adı, kategori, açıklama ve görsel yolu düzenlenir. Gerçek görselleri `public/images/` içine ekleyin. Örneğin `/images/zeytin-tepsi.webp`. Görsel açıklamaları ve temsili görsel etiketleri `src/main.jsx` içinde bulunur.

**Bu sürümdeki ürün adları ve SVG çizimleri temsili tasarım örnekleridir. Instagram içeriği doğrulanamadığından gerçek işletme kataloğu olarak kabul edilmemelidir.** Canlı yayın öncesi işletmenin onayladığı fotoğraf ve ürün bilgileriyle değiştirin; temsili görsel etiketlerini ancak bundan sonra kaldırın. Gıda teması, malzeme, stok, fiyat veya dayanıklılık iddiası eklenmemiştir.

Renkler ve duyarlı düzen `src/style.css` içinde tanımlıdır. Google Fonts erişilemezse yerel fontlara geçilir. Instagram bağlantısı `src/products.js` içindedir. Telefon veya adres doğrulanmadığı için eklenmemiştir. Analitik, çerez veya form verisi toplanmaz.

## Hostinger’e aktarım

Domain satın almak tek başına dosya barındırma alanı sağlamaz; statik dosya yüklemeyi destekleyen bir web hosting alanı gerekir. Bu proje Hostinger Website Builder projesi değildir.

1. `npm ci` ve `npm run build` komutlarını çalıştırın.
2. hPanel’de alan adına bağlı hostingin dosya yöneticisini açın.
3. **`dist` klasörünün içeriğini** ilgili sitenin `public_html` dizinine yükleyin. `dist` klasörünü kendisini alt klasör olarak yüklemeyin: `index.html` doğrudan `public_html` altında olmalı.
4. `index.html`, `assets/`, `images/` ve `favicon.svg` birlikte yüklenmelidir. Node.js sunucusu gerekmez.
5. Hostinger panelinin verdiği DNS yönlendirmesini ve SSL kurulumunu tamamlayın; doğru kayıtlar hosting planına göre değişir.
6. Alan adında mobil görünüm, filtreler, arama ve Instagram bağlantılarını kontrol edin.

GitHub Actions her gönderimde test ve derlemeyi çalıştırır; `hostinger-public-html` adlı indirilebilir yayın dosyası üretir. Yerel `release/hostinger-public-html.zip` de yalnızca derlenmiş dosyaları içerir. Kaynak kodunu veya `node_modules` klasörünü hosting alanına yüklemeyin.

Hosting ve DNS değişiklikleri bu aşamada yapılmadı. Otomatik FTP dağıtımı veya gizli anahtar gerekli değildir.
