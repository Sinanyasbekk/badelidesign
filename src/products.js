// Tasarım örnekleri: gerçek ürünler ve fotoğraflar işletme onayıyla değiştirilmeli.
// Fotoğrafları public/images/ klasörüne ekleyip image alanını güncelleyin.
import { roseTrayProducts } from './roseTrayProducts.js';
import { coloredRoseProducts } from './coloredRoseProducts.js';
export const instagramUrl = 'https://www.instagram.com/badelidesign/';
export const categories = ['Tümü', 'Çok Satanlar', 'Tepsiler', 'Sehpalar', 'Sunumluklar', 'Çaydanlıklar', 'Dekoratif Objeler'];
// Şimdilik temsili seçki. İşletmenin onayladığı çok satan ürün kimlikleriyle güncelleyin.
export const bestSellerIds = ['zeytin-tepsi', 'bahar-sehpa', 'limon-sunumluk', 'mavi-caydanlik'];
export const products = [
  ...coloredRoseProducts,
  { id: 'romantik-desenli-tek-kisilik-tepsi', name: 'Romantik Desenli Tepsi ve Lokumluk', category: 'Tepsiler', subtitle: 'Klasik çift figürü, krem zemin ve altın tonlu kabartmalar', image: '/images/romantik-desenli-tek-kisilik-tepsi.png', images: ['/images/romantik-desenli-tepsi-0979.jpg', '/images/romantik-desenli-tepsi-0980.jpg'], imageCaptions: ['Ürün görseli', 'Tepsi ve uyumlu lokumluğun gerçek fotoğrafı', 'Aynı modelin takımlarıyla genel görünüm'], imageFit: 'contain', description: 'Krem zemin üzerindeki romantik bahçe sahnesi, pembe ve mavi kıyafetli çift figürüyle öne çıkar. Altın tonlu kıvrımlı kenarlar ve aynı desenli lokumluk, tek kişilik tepsiyi tamamlar. Gerçek ürün fotoğrafları galeride yer alır.', demo: false },
  { id: 'nakis-desenli-tek-kisilik-tepsi', name: 'Nakış Desenli Tepsi ve Lokumluk', category: 'Tepsiler', subtitle: 'Klasik figürlü desen, krem zemin ve altın tonlu süslemeler', image: '/images/nakis-desenli-tek-kisilik-tepsi.png', images: ['/images/nakis-desenli-tepsi-1153.jpg', '/images/nakis-desenli-tepsi-1155.jpg'], imageCaptions: ['Ürün görseli', 'Tepsi ve lokumluk takımlarının gerçek fotoğrafı', 'Figürlü desen ve altın tonlu kenar detayları'], imageFit: 'contain', description: 'Krem zemin üzerinde nakış işleyen iki kadın figürü, kuş motifleri ve altın tonlu kabartmalı çerçeve bir araya gelir. Aynı sahneyle süslenen uyumlu lokumluk, tek kişilik tepsiyi tamamlar. Gerçek ürün fotoğraflarını galeride inceleyebilirsiniz.', demo: false },
  { id: 'barok-cicekli-tek-kisilik-tepsi', name: 'Tek Kişilik Barok Çiçekli Tepsi', category: 'Tepsiler', subtitle: 'Krem zemin, sarı-beyaz çiçekler ve altın tonlu çerçeve', image: '/images/barok-cicekli-tek-kisilik-tepsi.png', images: ['/images/barok-cicekli-tepsi-4261.jpg', '/images/barok-cicekli-tepsi-4263.jpg'], imageCaptions: ['Tek kişilik ürün görseli', 'Tek kişilik modelin gerçek fotoğrafı — koleksiyon görünümü', 'Aynı desenin farklı boylarıyla genel görünüm'], imageFit: 'contain', description: 'Sarı ve beyaz çiçek buketini çevreleyen altın görünümlü motifler, krem zemin ve kabartmalı barok kenarlarla tamamlanır. Bu model tek kişilik tepsi olarak sunulur; galerideki toplu fotoğraflarda aynı desenin farklı boylarını da görebilirsiniz.', demo: false },
  { id: 'barok-cicekli-4-6-kisilik-tepsi', name: 'Altın Çerçeveli Barok Çiçekli Tepsi', category: 'Tepsiler', subtitle: '4-6 kişilik sunumlar için krem zemin ve altın süslemeler', image: '/images/barok-cicekli-4-6-kisilik-tepsi.png', images: ['/images/barok-cicekli-tepsi-4262.jpg', '/images/barok-cicekli-tepsi-4263.jpg'], imageCaptions: ['Ürün görseli', 'Çiçek deseni ve kabartmalı kenar detayları', 'Aynı modelin gerçek ürün fotoğrafı — koleksiyon görünümü'], imageFit: 'contain', description: 'Krem zemin üzerindeki sarı ve beyaz çiçek buketi, koyu yeşil tonlu merkez ve altın görünümlü barok çerçeveyle tamamlanır. Kabartmalı kenarları ve iki yandaki tutma boşluklarıyla öne çıkan bu model, 4-6 Kişilik Tepsiler koleksiyonunda yer alır.', demo: false },
  { id: 'vintage-cicek-buketli-oval-tepsi', name: 'Vintage Çiçek Buketli Altın Oval Tepsi', category: 'Tepsiler', subtitle: 'Krem bordür, altın detaylar ve renkli çiçek buketi', image: '/images/vintage-cicek-buketli-oval-tepsi.png', images: ['/images/vintage-oval-tepsi-2256.jpg', '/images/vintage-oval-tepsi-2257.jpg'], imageCaptions: ['Ürün görseli', 'Oval tepsinin gerçek ürün fotoğrafı', 'Aynı modelin farklı boylarıyla koleksiyon görünümü'], imageFit: 'contain', description: 'Altın tonlu zemin, krem renkli eskitme görünümlü bordür ve kabartmalı kenarlar; merkezdeki pembe, şeftali ve mürdüm tonlarındaki çiçek buketiyle birleşir. Tek kişilik oval tepsinin gerçek fotoğraflarını galeride inceleyebilirsiniz.', demo: false },
  { id: 'altin-cicekli-tek-kisilik-tepsi', name: 'Altın Çiçekli Tepsi ve Lokumluk', category: 'Tepsiler', subtitle: 'Altın tonları, zarif çiçekler ve uyumlu lokumluk', image: '/images/altin-cicekli-tek-kisilik-tepsi.png', images: ['/images/altin-cicekli-tepsi-4264.jpg', '/images/altin-cicekli-tepsi-4266.jpg'], imageCaptions: ['Ürün görseli', 'Tepsi ve lokumluğun gerçek ürün fotoğrafı', 'Fincanla kullanım örneği'], imageFit: 'contain', description: 'Altın tonlu zemini, kıvrımlı kabartma kenarları ve merkezindeki krem-sarı çiçek buketiyle tek kişilik tepsi takımı. Aynı çiçek desenine sahip lokumluk tasarımı tamamlar. Galeride takımın gerçek fotoğraflarını ve fincanla kullanım örneğini inceleyebilirsiniz.', demo: false },
  ...roseTrayProducts,
  { id: 'pembe-hibiskus-oval-tepsi', name: 'Pembe Hibiskuslu Oval Tepsi', category: 'Tepsiler', subtitle: 'Pembe hibiskus ve altın tonlu kenar süslemeleri', image: '/images/pembe-hibiskus-oval-tepsi.png', images: ['/images/pembe-hibiskus-oval-tepsi-0806.jpg', '/images/pembe-hibiskus-oval-tepsi-0808.jpg'], imageCaptions: ['Ürün görseli', 'Yakın çekim ürün fotoğrafı', 'Oval tepsi koleksiyonundan genel görünüm'], imageFit: 'contain', description: 'Beyaz zemin üzerindeki pembe hibiskus, pastel pembe bordür ve altın tonlu süslemelerle tamamlanır. Oval formdaki bu tasarımın ölçü ve uygulama detayları için bizimle iletişime geçebilirsiniz.', demo: false },
  { id: 'kirmizi-hibiskus-oval-tepsi', name: 'Kırmızı Hibiskuslu Porselen Oval Tepsi', category: 'Tepsiler', subtitle: 'Kırmızı hibiskus, beyaz zemin ve altın tonlu detaylar', image: '/images/kirmizi-hibiskus-oval-tepsi.png', imageFit: 'contain', description: 'Beyaz porselen zemin üzerindeki kırmızı hibiskus, kırmızı bordür ve altın tonlu kabartmalı kenarlarla bir araya gelir. Ölçü ve kişiselleştirme seçenekleri için Instagram üzerinden bize ulaşabilirsiniz.', demo: false },
  { id: 'cay-tabakli-mavi-cicekli-oval-tepsi', name: 'Çay Tabaklı Mavi Çiçekli Oval Tepsi', category: 'Tepsiler', subtitle: 'Uyumlu çay tabağıyla tamamlanan mavi çiçekli tasarım', image: '/images/cay-tabakli-mavi-cicekli-oval-tepsi.png', imageFit: 'contain', description: 'Mavi çiçekli, altın tonlu işlemeli oval tepsi; aynı desen ve renklerdeki çay tabağıyla birlikte bir takım oluşturur. Beyaz zemin, açık mavi bordür ve altın tonlu kenarlar hem tepside hem çay tabağında devam eder.', demo: false },
  { id: 'sari-hibiskus-oval-tepsi', name: 'Sarı Hibiskuslu Barok Oval Tepsi', category: 'Tepsiler', subtitle: 'Sarı hibiskus ve barok esintili altın tonlu çerçeve', image: '/images/sari-hibiskus-oval-tepsi.png', imageFit: 'contain', description: 'Sarı hibiskus motifi ve sarı bordür, beyaz zemin üzerinde canlı bir görünüm oluşturur. Altın tonlu kabartmalı kenar süslemeleri oval formu çevreler. Ürün detayları için bize yazabilirsiniz.', demo: false },
  { id: 'lacivert-cicekli-oval-tepsi', name: 'Altın Çerçeveli Lacivert Çiçekli Oval Tepsi', category: 'Tepsiler', subtitle: 'Mavi çiçek, lacivert bordür ve altın tonlu çerçeve', image: '/images/lacivert-cicekli-oval-tepsi.png', imageFit: 'contain', description: 'Beyaz zemin üzerindeki mavi çiçek, koyu lacivert bordür ve altın tonlu kenar süslemeleriyle tamamlanır. Tek oval tepsi olarak sunulan bu tasarımın ölçü ve diğer detaylarını bizimle görüşebilirsiniz.', demo: false },
  { id: 'turuncu-cicekli-oval-tepsi', name: 'Turuncu Çiçekli Oval Tepsi', category: 'Tepsiler', subtitle: 'Altın tonlu kenarlar, turuncu çiçek deseni', image: '/images/turuncu-cicekli-oval-tepsi.png', imageFit: 'contain', description: 'Beyaz zemin üzerinde turuncu çiçek deseni ve altın tonlu süslemeli kenarlarıyla oval porselen tepsi. Ölçü ve tasarım detayları için Instagram üzerinden iletişime geçebilirsiniz.', demo: false },
  { id: 'zeytin-tepsi', name: 'Zeytin Dalı', category: 'Tepsiler', subtitle: 'Doğadan ilham alan bir dokunuş', image: '/images/tray.svg', description: 'Zeytin dallarıyla yorumlanan tepsi tasarımı. Desen ve renk fikrini konuşmak için Instagram üzerinden bize ulaşabilirsiniz.', demo: true },
  { id: 'bahar-sehpa', name: 'Bahar Bahçesi', category: 'Sehpalar', subtitle: 'Yaşam alanlarına çiçekli bir yorum', image: '/images/table.svg', description: 'Çiçek motifleriyle tasarlanmış dekoratif sehpa örneği. Kendi alanınıza uygun renk ve desenleri birlikte değerlendirebiliriz.', demo: true },
  { id: 'limon-sunumluk', name: 'Limon Çiçeği', category: 'Sunumluklar', subtitle: 'Sofralara küçük bir Akdeniz esintisi', image: '/images/platter.svg', description: 'Limon ve yaprak desenlerinin buluştuğu sunumluk tasarımı. Kullanım ve bakım bilgileri için işletmeyle iletişime geçin.', demo: true },
  { id: 'mavi-caydanlik', name: 'Mavi Düş', category: 'Çaydanlıklar', subtitle: 'Çay sohbetlerine zarif bir eşlikçi', image: '/images/teapot.svg', description: 'Mavi botanik çizgilerle yorumlanmış çaydanlık tasarımı. Malzeme, kullanım ve mevcut çalışmalar hakkında Instagram üzerinden bilgi alabilirsiniz.', demo: true },
  { id: 'kir-cicegi-tepsi', name: 'Kır Çiçeği', category: 'Tepsiler', subtitle: 'Yumuşak renkler, ince detaylar', image: '/images/flower-tray.svg', description: 'Kır çiçeklerinden ilham alan dekoratif tepsi örneği. Renk ve motif seçeneklerini konuşmak için bize yazın.', demo: true },
  { id: 'botanik-vazo', name: 'Botanik', category: 'Dekoratif Objeler', subtitle: 'Evinizin bir köşesinde doğanın izi', image: '/images/vase.svg', description: 'Bitkisel motiflerle yorumlanan dekoratif obje tasarımı. Güncel çalışmalarımızı Instagram hesabımızda keşfedebilirsiniz.', demo: true },
];
// Tepsiler kişi sayısına göre ayrılır; diğer kategoriler desenlere göre gruplanır.
export const productSubcategories = {
  ...Object.fromEntries(coloredRoseProducts.map(product => [product.id, 'Tek Kişilik Tepsiler'])),
  'romantik-desenli-tek-kisilik-tepsi': 'Tek Kişilik Tepsiler',
  'nakis-desenli-tek-kisilik-tepsi': 'Tek Kişilik Tepsiler',
  'barok-cicekli-tek-kisilik-tepsi': 'Tek Kişilik Tepsiler',
  'barok-cicekli-4-6-kisilik-tepsi': '4-6 Kişilik Tepsiler',
  'vintage-cicek-buketli-oval-tepsi': 'Tek Kişilik Tepsiler',
  'altin-cicekli-tek-kisilik-tepsi': 'Tek Kişilik Tepsiler',
  ...Object.fromEntries(roseTrayProducts.map(product => [product.id, 'Tek Kişilik Tepsiler'])),
  'pembe-hibiskus-oval-tepsi': 'Tek Kişilik Tepsiler',
  'kirmizi-hibiskus-oval-tepsi': 'Tek Kişilik Tepsiler',
  'cay-tabakli-mavi-cicekli-oval-tepsi': 'Tek Kişilik Tepsiler',
  'sari-hibiskus-oval-tepsi': 'Tek Kişilik Tepsiler',
  'lacivert-cicekli-oval-tepsi': 'Tek Kişilik Tepsiler',
  'turuncu-cicekli-oval-tepsi': 'Tek Kişilik Tepsiler',
  'zeytin-tepsi': '4-6 Kişilik Tepsiler',
  'bahar-sehpa': 'Çiçek Desenli',
  'limon-sunumluk': 'Limon Desenli',
  'mavi-caydanlik': 'Mavi Botanik',
  'kir-cicegi-tepsi': '4-6 Kişilik Tepsiler',
  'botanik-vazo': 'Botanik Desenli',
};
export function filterProducts(category, query = '', subcategory = '') {
  const term = query.trim().toLocaleLowerCase('tr-TR');
  return products.filter(p => (category === 'Tümü' || (category === 'Çok Satanlar' ? bestSellerIds.includes(p.id) : p.category === category)) && (!subcategory || productSubcategories[p.id] === subcategory) && `${p.name} ${p.category} ${p.subtitle} ${productSubcategories[p.id] || ''}`.toLocaleLowerCase('tr-TR').includes(term));
}

export function getSubcategories(category) {
  const groups = new Map();
  for (const product of filterProducts(category)) {
    const name = productSubcategories[product.id];
    if (!name) continue;
    const group = groups.get(name) || { name, count: 0, image: product.image };
    group.count += 1;
    groups.set(name, group);
  }
  return [...groups.values()];
}


