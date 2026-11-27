const colors = [
  ['lacivert', 'Lacivert'],
  ['acik-mavi', 'Açık Mavi'],
  ['sedef-beyaz', 'Sedef Beyaz'],
  ['pembe', 'Pembe'],
  ['turuncu', 'Turuncu'],
  ['siyah', 'Siyah'],
];

export const coloredRoseProducts = colors.map(([key, color]) => ({
  id: `renkli-gul-${key}-takim`,
  name: `${color} Gül Desenli Oval Tepsi ve Lokumluk`,
  category: 'Tepsiler',
  subtitle: `${color} bordür, gül buketi ve uyumlu lokumluk`,
  image: `/images/renkli-gul-${key}-takim.png`,
  images: ['/images/renkli-gul-takimlari-0293.jpg', '/images/renkli-gul-takimlari-0294.jpg'],
  imageCaptions: ['Ürün görseli', 'Renk seçenekleriyle gerçek koleksiyon fotoğrafı', 'Koleksiyonun farklı açıdan gerçek fotoğrafı'],
  imageFit: 'contain',
  description: `Beyaz zemin üzerindeki krem, pembe ve bordo gül buketi; ${color.toLocaleLowerCase('tr-TR')} bordür ve altın tonlu kabartmalı kenarlarla tamamlanır. Aynı renkteki desenli lokumlukla birlikte tek kişilik bir sunum takımı oluşturur. Galerideki iki gerçek fotoğraf koleksiyonun tüm renklerini gösterir.`,
  demo: false,
}));

export const coloredRoseInformation = Object.fromEntries(colors.map(([key, color]) => [
  `renkli-gul-${key}-takim`, {
    demo: false, pattern: 'Krem, Pembe ve Bordo Gül Buketi',
    material: 'Bilgi için iletişime geçin', size: 'Bilgi için iletişime geçin',
    pieces: '2 parça: 1 oval tepsi + 1 lokumluk', color: `${color} / beyaz / altın / gül tonları`,
    title: `${color} Gül Desenli Tek Kişilik Tepsi Takımı`,
    story: `Oval tepsinin merkezindeki gül buketi, beyaz zemin üzerinde öne çıkar. ${color} renkli bordür ve altın tonlu kabartmalar, uyumlu lokumluğun kenarları ve merkezindeki kıvrımlı desenle bütünleşir.`,
    detail: 'Takım içeriği: 1 oval tepsi ve 1 uyumlu lokumluk. Galerideki iki toplu fotoğraf diğer renk seçeneklerini de gösterir. Kesin ölçü, malzeme ve kişiselleştirme seçenekleri için Instagram üzerinden bilgi alabilirsiniz.',
    care: 'Takıma uygun temizlik ve kullanım bilgilerini Instagram üzerinden öğrenebilirsiniz.',
  },
]));
