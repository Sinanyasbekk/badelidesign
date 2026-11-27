const colors = [
  ['bakir-turuncu', 'Bakır Turuncu', 'Bakır turuncu / altın / krem'],
  ['koyu-yesil', 'Koyu Yeşil', 'Koyu yeşil / altın / krem'],
  ['sampanya-vizon', 'Şampanya Vizon', 'Şampanya / vizon / altın / krem'],
  ['kobalt-mavi', 'Kobalt Mavi', 'Kobalt mavi / altın / krem'],
  ['koyu-murdum', 'Koyu Mürdüm', 'Koyu mürdüm / altın / krem'],
  ['kirmizi', 'Kırmızı', 'Kırmızı / altın / krem'],
];

export const roseTrayProducts = colors.map(([key, color]) => ({
  id: `gul-buketli-${key}-takim`,
  name: `${color} Gül Buketli Tepsi ve Lokumluk`,
  category: 'Tepsiler',
  subtitle: `${color} kenarlar, gül buketi ve kalp biçimli lokumluk`,
  image: `/images/gul-buketli-${key}-takim.png`,
  images: ['/images/gul-buketli-takimlar-kaynak.jpg'],
  imageCaptions: ['Kaynak fotoğraf referans alınarak düzenlenen ürün görseli', 'Kaynak fotoğraf — koleksiyonun genel görünümü'],
  imageFit: 'contain',
  description: `${color} renkli kenar panelleri, altın tonlu kabartmalar ve merkezdeki gül buketiyle tamamlanan tek kişilik oval tepsi takımı. Tepsinin yanında aynı renkte, pembe gül motifli kalp biçimli bir lokumluk bulunur.`,
  demo: false,
}));

export const roseTrayInformation = Object.fromEntries(colors.map(([key, color, palette]) => [
  `gul-buketli-${key}-takim`, {
    demo: false, pattern: 'Gül Buketi', material: 'Bilgi için iletişime geçin', size: 'Bilgi için iletişime geçin',
    pieces: '2 parça: 1 oval tepsi + 1 kalp lokumluk', color: palette,
    title: `${color} Gül Buketli Tek Kişilik Tepsi Takımı`,
    story: `Altın tonlu oval tepsinin merkezinde pembe, mürdüm ve bej tonlarından oluşan bir gül buketi yer alır. ${color} renkli kenarlar ve barok esintili kabartmalar, aynı renkteki kalp biçimli lokumlukla uyum oluşturur. Lokumluğun iç yüzeyi küçük bir pembe gülle süslenmiştir.`,
    detail: 'Takım içeriği: 1 oval tepsi ve 1 kalp biçimli lokumluk. Galerideki toplu kaynak fotoğraf, koleksiyondaki diğer renkleri de gösterir. Ölçü, malzeme ve kişiselleştirme detayları için Instagram üzerinden iletişime geçebilirsiniz.',
    care: 'Takıma uygun temizlik ve kullanım bilgilerini Instagram üzerinden öğrenebilirsiniz.',
  },
]));
