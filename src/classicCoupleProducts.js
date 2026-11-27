const colors = [
  ['turuncu', 'Turuncu'], ['sari', 'Sarı'], ['bordo', 'Bordo'],
  ['mavi', 'Mavi'], ['fusya', 'Fuşya'], ['zeytin-yesili', 'Zeytin Yeşili'],
];

export const classicCoupleProducts = colors.map(([key, color]) => ({
  id: `klasik-cift-${key}-tepsi`, name: `${color} Bordürlü Klasik Çift Oval Tepsi`, category: 'Tepsiler',
  subtitle: `${color} eskitme bordür, klasik çift figürü ve altın tonlu ajurlu kenarlar`,
  image: `/images/klasik-cift-${key}-tepsi.png`, images: ['/images/klasik-cift-tepsileri-9053.jpg'],
  imageCaptions: ['Ürün görseli', 'Altı renk seçeneğinin gerçek koleksiyon fotoğrafı — fincanlı kullanım örneği'],
  imageFit: 'contain', demo: false,
  description: `Krem zemin üzerindeki klasik bahçe sahnesi, ${color.toLocaleLowerCase('tr-TR')} eskitme görünümlü bordür ve altın tonlu ajurlu kenarlarla çevrelenir. Pembe kıyafetli erkek ve sarı elbiseli kadın figürünün yer aldığı bu model tek kişilik oval tepsidir. Galeride koleksiyonun toplu gerçek fotoğrafı bulunur.`,
}));

export const classicCoupleInformation = Object.fromEntries(colors.map(([key, color]) => [
  `klasik-cift-${key}-tepsi`, {
    demo: false, pattern: 'Klasik Çift ve Bahçe Sahnesi', material: 'Bilgi için iletişime geçin', size: 'Bilgi için iletişime geçin',
    pieces: '1 oval tepsi', color: `${color} / krem / altın / pembe / sarı / mavi / yeşil tonları`,
    title: `${color} Bordürlü Tek Kişilik Klasik Çift Tepsi`,
    story: `${color} renkli bordürdeki eskitme görünümlü çizgiler, kıvrımlı altın tonlu ajur kenarlarla birleşir. Merkezdeki bahçe sahnesinde pembe kıyafetli erkek ile sarı elbiseli kadın, çiçekler ve ağaçlarla çevrelenir.`,
    detail: 'Ürün tek kişilik oval tepsi olarak listelenir. Galerideki gerçek fotoğraf altı renk seçeneğini birlikte gösterir; fincanlı sunum kullanım örneğidir. Kesin ölçü, malzeme ve takım içeriği hakkında Instagram üzerinden bilgi alabilirsiniz.',
    care: 'Ürüne uygun temizlik ve bakım bilgilerini Instagram üzerinden öğrenebilirsiniz.',
  },
]));
