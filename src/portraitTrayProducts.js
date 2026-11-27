const designs = [
  ['pembe-sapkali-kadin', 'Pembe Şapkalı Kadın', 'Çiçekli pembe şapkalı, elinde buket taşıyan kadın portresi.', 'Pembe / mercan / mavi / yeşil'],
  ['bahcede-gezinti', 'Bahçede Gezinti', 'Bahçede yan yana duran, klasik kıyafetli bir çiftin renkli sahnesi.', 'Sarı / turuncu / açık mavi / mor / yeşil'],
  ['bahcede-muzik', 'Bahçede Müzik', 'Ağaçların altında telli çalgı çalan kadın ve ona eşlik eden erkek figürü.', 'Mor / sarı / turuncu / mavi / yeşil'],
  ['romantik-bulusma', 'Romantik Buluşma', 'Çiçeklerle çevrili bahçede oturan, pembe ve mavi kıyafetli çift.', 'Pembe / mavi / turuncu / yeşil'],
  ['mavi-elbiseli-sapkali-kadin', 'Mavi Elbiseli Şapkalı Kadın', 'Çiçekli şapkası, beyaz eldivenleri ve gül buketiyle mavi elbiseli kadın portresi.', 'Mavi / pembe / beyaz / yeşil'],
  ['cicek-tacli-kadin', 'Çiçek Taçlı Kadın', 'Saçında çiçekler, boynunda mavi taşlı kolyeyle betimlenen mavi elbiseli kadın portresi.', 'Mavi / pembe / şeftali / yeşil'],
];

export const portraitTrayProducts = designs.map(([key, name, scene]) => ({
  id: `portre-${key}-tepsi`, name: `${name} Oval Tepsi`, category: 'Tepsiler',
  subtitle: 'Klasik figürlü desen, beyaz eskitme bordür ve altın tonlu kenarlar',
  image: `/images/portre-${key}-tepsi.png`, images: ['/images/portre-tepsileri-9064.jpg'],
  imageCaptions: ['Ürün görseli', 'Altı modelin birlikte yer aldığı gerçek koleksiyon fotoğrafı'],
  imageFit: 'contain', demo: false,
  description: `${scene} Krem zemin, beyaz eskitme görünümlü bordür ve altın tonlu kabartmalarla tamamlanan bu model, tek kişilik oval tepsi olarak listelenir. Galeride koleksiyonun toplu gerçek fotoğrafını da inceleyebilirsiniz.`,
}));

export const portraitTrayInformation = Object.fromEntries(designs.map(([key, name, scene, palette]) => [
  `portre-${key}-tepsi`, {
    demo: false, pattern: name, material: 'Bilgi için iletişime geçin', size: 'Bilgi için iletişime geçin',
    pieces: '1 oval tepsi', color: `Krem / beyaz / altın / ${palette.toLocaleLowerCase('tr-TR')}`,
    title: `${name} Tek Kişilik Oval Tepsi`,
    story: `${scene} Oval formu çevreleyen altın tonlu kabartmalı motifler ve beyaz eskitme görünümlü bordür, klasik sahneyi çerçeveler.`,
    detail: 'Ürün tek kişilik bir oval tepsidir. Galerideki toplu fotoğraf, aynı koleksiyondaki diğer beş modeli de gösterir. Kesin ölçü, malzeme ve kişiselleştirme seçenekleri için Instagram üzerinden bilgi alabilirsiniz.',
    care: 'Ürüne uygun temizlik ve bakım bilgilerini Instagram üzerinden öğrenebilirsiniz.',
  },
]));
