// Tasarım örnekleri: gerçek ürünler ve fotoğraflar işletme onayıyla değiştirilmeli.
// Fotoğrafları public/images/ klasörüne ekleyip image alanını güncelleyin.
export const instagramUrl = 'https://www.instagram.com/badelidesign/';
export const categories = ['Tümü', 'Çok Satanlar', 'Tepsiler', 'Sehpalar', 'Sunumluklar', 'Çaydanlıklar', 'Dekoratif Objeler'];
// Şimdilik temsili seçki. İşletmenin onayladığı çok satan ürün kimlikleriyle güncelleyin.
export const bestSellerIds = ['zeytin-tepsi', 'bahar-sehpa', 'limon-sunumluk', 'mavi-caydanlik'];
export const products = [
  { id: 'turuncu-cicekli-oval-tepsi', name: 'Turuncu Çiçekli Oval Tepsi', category: 'Tepsiler', subtitle: 'Altın tonlu kenarlar, turuncu çiçek deseni', image: '/images/turuncu-cicekli-oval-tepsi.png', imageFit: 'contain', description: 'Beyaz zemin üzerinde turuncu çiçek deseni ve altın tonlu süslemeli kenarlarıyla oval porselen tepsi. Ölçü ve tasarım detayları için Instagram üzerinden iletişime geçebilirsiniz.', demo: false },
  { id: 'zeytin-tepsi', name: 'Zeytin Dalı', category: 'Tepsiler', subtitle: 'Doğadan ilham alan bir dokunuş', image: '/images/tray.svg', description: 'Zeytin dallarıyla yorumlanan tepsi tasarımı. Desen ve renk fikrini konuşmak için Instagram üzerinden bize ulaşabilirsiniz.', demo: true },
  { id: 'bahar-sehpa', name: 'Bahar Bahçesi', category: 'Sehpalar', subtitle: 'Yaşam alanlarına çiçekli bir yorum', image: '/images/table.svg', description: 'Çiçek motifleriyle tasarlanmış dekoratif sehpa örneği. Kendi alanınıza uygun renk ve desenleri birlikte değerlendirebiliriz.', demo: true },
  { id: 'limon-sunumluk', name: 'Limon Çiçeği', category: 'Sunumluklar', subtitle: 'Sofralara küçük bir Akdeniz esintisi', image: '/images/platter.svg', description: 'Limon ve yaprak desenlerinin buluştuğu sunumluk tasarımı. Kullanım ve bakım bilgileri için işletmeyle iletişime geçin.', demo: true },
  { id: 'mavi-caydanlik', name: 'Mavi Düş', category: 'Çaydanlıklar', subtitle: 'Çay sohbetlerine zarif bir eşlikçi', image: '/images/teapot.svg', description: 'Mavi botanik çizgilerle yorumlanmış çaydanlık tasarımı. Malzeme, kullanım ve mevcut çalışmalar hakkında Instagram üzerinden bilgi alabilirsiniz.', demo: true },
  { id: 'kir-cicegi-tepsi', name: 'Kır Çiçeği', category: 'Tepsiler', subtitle: 'Yumuşak renkler, ince detaylar', image: '/images/flower-tray.svg', description: 'Kır çiçeklerinden ilham alan dekoratif tepsi örneği. Renk ve motif seçeneklerini konuşmak için bize yazın.', demo: true },
  { id: 'botanik-vazo', name: 'Botanik', category: 'Dekoratif Objeler', subtitle: 'Evinizin bir köşesinde doğanın izi', image: '/images/vase.svg', description: 'Bitkisel motiflerle yorumlanan dekoratif obje tasarımı. Güncel çalışmalarımızı Instagram hesabımızda keşfedebilirsiniz.', demo: true },
];
// Temsili alt kategoriler; gerçek katalogla birlikte düzenlenebilir.
export const productSubcategories = {
  'turuncu-cicekli-oval-tepsi': 'Oval Tepsi',
  'zeytin-tepsi': 'Zeytin Desenli',
  'bahar-sehpa': 'Çiçek Desenli',
  'limon-sunumluk': 'Limon Desenli',
  'mavi-caydanlik': 'Mavi Botanik',
  'kir-cicegi-tepsi': 'Çiçek Desenli',
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
