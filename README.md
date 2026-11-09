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

Alt kategoriler aynı dosyadaki `productSubcategories` eşlemesinde ürün kimliğine göre tanımlanır. Örneğin `'zeytin-tepsi': 'Zeytin Desenli'`. Menüdeki resimler ve adetler bu eşlemeden otomatik türetilir. Ana kategori, alt kategori ve arama birlikte filtrelenir. Mevcut alt kategori adları temsili olarak hazırlanmıştır.

Ürün detayındaki malzeme, boyut, parça sayısı, renk ve uzun açıklamalar `src/productInformation.js` içinde ürün kimliğine göre düzenlenir. Bu sürümde tüm teknik bilgiler temsili olarak işaretlenmiştir. Gerçek ürün verileri işletme tarafından doğrulandıktan sonra güncellenmelidir.

Ek ürün fotoğrafları `src/products.js` içindeki `images` dizisinde tutulur; ana `image` ilk görsel olarak kalır. İsteğe bağlı `imageCaptions` dizisi ana görsel dahil tüm fotoğrafların açıklamalarını sırasıyla içerir. HEIC dosyalarını web için JPEG'e dönüştürmek üzere `node scripts/convert-heic.mjs kaynak.HEIC public/images/hedef.jpg` komutunu kullanabilirsiniz. Bu araç yalnızca hazırlık sırasında çalışır; siteye HEIC veya dönüştürme kütüphanesi yüklenmez.

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

## GitHub üzerinden otomatik yayın

`main` React kaynak kodunu; `codex/hostinger` ise yalnızca derlenmiş site dosyalarını içerir. `main` üzerindeki her gönderimde GitHub Actions testleri ve derlemeyi çalıştırır. Başarılı derleme yayın dalına aktarılır. Başarısız test veya derleme yayın dalını değiştirmez. Pull request çalışmaları yayın yapmaz.

Hostinger → ilgili web sitesi → Advanced → Git bölümünden bu depoyu bağlayın. **Branch: `codex/hostinger`**, **hedef: `public_html`** seçin. `main` dalını doğrudan yayınlamayın; bu hosting akışı React kaynaklarını derlemez. İlk Deploy işleminden sonra Auto-deployment açık olmalıdır. Hostinger bağlantısı, ilk yayın ve otomatik güncelleme ayrıca panelden doğrulanmalıdır.

Workflow yalnızca yayın işine `contents: write` verir; GitHub'ın geçici `GITHUB_TOKEN` kimliğini kullanır. FTP parolası veya kişisel erişim anahtarı eklemek gerekmez. Yayın dalında elle değişiklik yapmayın; sonraki derleme bu dalın içeriğini günceller. Hosting üzerindeki değişiklikleri de kaynak projeye işleyin.
