import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, filterProducts, instagramUrl } from './products';
import './style.css';
import CustomerStories from './CustomerStories.jsx';
import CategoryNavigation from './CategoryNavigation.jsx';
import InstagramButton from './InstagramButton.jsx';
import BestSellers from './BestSellers.jsx';
import HeaderSearch from './HeaderSearch.jsx';
import CollectionSubcategories from './CollectionSubcategories.jsx';

function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? '↗' : '↗'}</span>; }
function InstagramLink({ children, className = '' }) { return <a className={className} href={instagramUrl} target="_blank" rel="noopener noreferrer">{children}</a>; }
function ProductDialog({ product, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!product) return;
    const dialog = ref.current;
    const previous = document.activeElement;
    dialog.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = before; previous?.focus(); };
  }, [product]);
  return <dialog ref={ref} className="product-dialog" onClose={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }} aria-labelledby="dialog-title">
    {product && <div className="dialog-inner"><button className="close" aria-label="Ürün detayını kapat" onClick={onClose}>×</button><img src={product.image} alt={`${product.name} — temsili ürün çizimi`} /><div className="dialog-copy"><span className="eyebrow">{product.category}</span><h2 id="dialog-title">{product.name}</h2><p>{product.description}</p><p className="demo-note">Tasarım örneğidir. Görsel ve ürün adı temsili olarak hazırlanmıştır; gerçek ürün, stok veya satış bilgisi içermez.</p><InstagramLink className="button dark">Instagram’dan bilgi alın <Arrow /></InstagramLink></div></div>}
  </dialog>;
}
function App() {
  const [category, setCategory] = useState('Tümü');
  const [subcategory, setSubcategory] = useState('');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [menu, setMenu] = useState(false);
  const visible = filterProducts(category, query, subcategory);
  function selectCategory(nextCategory, nextSubcategory = '') {
    setCategory(nextCategory);
    setSubcategory(nextSubcategory);
  }
  return <>
    <a className="skip" href="#main">İçeriğe geç</a>
    <div className="announcement">Biraz renk, biraz hayal, çokça el emeği.</div>
    <header className="header wrap"><a href="#" className="brand" aria-label="Badeli Design ana sayfa">Badeli Design<span>ATELIER</span></a><HeaderSearch onProduct={setSelected} /><button className="menu-button" aria-label="Gezinme menüsü" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? 'Kapat ×' : 'Menü ☰'}</button><nav id="navigation" className={menu ? 'open' : ''} aria-label="Ana gezinme"><a href="#koleksiyon" onClick={() => setMenu(false)}>Koleksiyon</a><a href="#hikayemiz" onClick={() => setMenu(false)}>Hikâyemiz</a><a href="#iletisim" onClick={() => setMenu(false)}>İletişim</a></nav><div className="header-actions"><InstagramLink className="header-social">Instagram <Arrow /></InstagramLink></div></header>
    <CategoryNavigation onBrowse={(nextCategory, nextSubcategory) => { selectCategory(nextCategory, nextSubcategory); setQuery(''); }} onProduct={setSelected} />
    <main id="main">
      <BestSellers onProduct={setSelected} onBrowse={() => { selectCategory('Çok Satanlar'); setQuery(''); }} />
      <section className="hero wrap"><div className="hero-copy"><span className="eyebrow"><span className="tiny-star">✳</span> EL BOYAMASI & DEKORATİF TASARIM</span><h1>Eşyaların da<br />bir <em>hikâyesi</em><br />olsun.</h1><p>Bir tepsiye dokunan çiçek, bir sehpaya uzanan dal…<br className="desktop" /> Günlük eşyalara renk ve karakter katıyoruz.</p><a className="button dark" href="#koleksiyon">Koleksiyonu keşfedin <Arrow /></a><div className="hero-signature"><span aria-hidden="true">❧</span> Her fırça darbesinde bir parça biz.</div></div><div className="hero-visual"><img src="/images/hero.svg" alt="Zeytin dallarıyla süslenmiş tepsi ve çaydanlığın temsili illüstrasyonu" fetchPriority="high" /><span className="image-note">Temsili tasarım çalışması</span><div className="round-stamp">EL EMEĞİYLE<br /><span>✳</span><br />SEVGİYLE</div></div><span className="hero-bottom">GÜNLÜK EŞYALAR, KÜÇÜK SANAT ESERLERİ.</span></section>
      <div className="values"><span>El boyaması detaylar</span><i>✳</i><span>Doğadan ilham alan desenler</span><i>✳</i><span>Yaşam alanlarına zarafet</span></div>
      <section id="koleksiyon" className="collection wrap"><div className="section-heading"><div><span className="eyebrow">ATÖLYEDEN SEÇKİLER</span><h2>Küçük detaylar.<br /><em>Güzel hisler.</em></h2></div><p>Sevdiğiniz köşelere, özenle hazırladığınız sofralara.<br />Size ilham veren tasarımı keşfedin.</p></div><div className="catalog-tools"><div className="filters" aria-label="Ürün kategorileri">{categories.map(c => <button key={c} aria-pressed={category === c} className={category === c ? 'active' : ''} onClick={() => selectCategory(c)}>{c}</button>)}</div><label className="search"><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Bir tasarım arayın" aria-label="Ürün ara" /></label></div><CollectionSubcategories category={category} selected={subcategory} onSelect={setSubcategory}/><div className="catalog-meta"><span aria-live="polite">{visible.length} tasarım</span><span>Görseller ve ürün adları temsili tasarım örnekleridir.</span></div><div className="product-grid">{visible.map(p => <article className="product-card" key={p.id}><button onClick={() => setSelected(p)} className="product-image" aria-label={`${p.name} detaylarını incele`}><img src={p.image} alt={`${p.name} temsili ürün çizimi`} loading="lazy" /><span className="product-badge">TASARIM ÖRNEĞİ</span><span className="card-arrow" aria-hidden="true">↗</span></button><div className="card-category">{p.category}</div><button className="product-title" onClick={() => setSelected(p)}>{p.name}</button><p>{p.subtitle}</p></article>)}</div>{visible.length === 0 && <div className="empty"><h3>Bu aramada bir tasarım bulamadık.</h3><p>Başka bir kelime deneyebilir veya tüm koleksiyona göz atabilirsiniz.</p><button className="button" onClick={() => { setQuery(''); selectCategory('Tümü'); }}>Tüm tasarımları göster <Arrow /></button></div>}</section>
      <section id="hikayemiz" className="story"><div className="wrap story-grid"><div className="story-art brand-art"><img src="/images/badeli-logo.jpg" alt="Badeli Design — yeşil zemin üzerinde altın renkli marka logosu" width="1023" height="1023" loading="lazy"/></div><div className="story-copy"><span className="eyebrow">BADELİ DESIGN’IN DÜNYASI</span><h2>Sıradan bir eşya,<br /><em>size özel bir his.</em></h2><p>Badeli Design’da tepsiler, sehpalar, sunumluklar ve çaydanlıklar; dekoratif boyama ve çizimlerle yeni bir ifadeye kavuşuyor.</p><p>Doğanın çizgilerini ve renklerin sıcaklığını yaşam alanlarına taşıyoruz. Çünkü bazen evin ruhunu değiştiren şey, küçük bir ayrıntı oluyor.</p><InstagramLink className="text-link">Atölyemizi Instagram’da keşfedin <Arrow /></InstagramLink></div></div></section>
      <CustomerStories />
      <section id="iletisim" className="contact wrap"><span className="eyebrow">BİRLİKTE HAYAL EDELİM</span><h2>Aklınızda <em>bir desen mi var?</em></h2><p>Bir renk, bir motif ya da sevdiğiniz bir eşya…<br />Tasarımlarımız hakkında konuşmak için bize yazın.</p><InstagramLink className="button dark">Instagram’dan iletişime geçin <Arrow /></InstagramLink><span className="contact-handle">@badelidesign</span></section>
    </main><footer className="footer wrap"><a href="#" className="brand">Badeli Design<span>ATELIER</span></a><p>El emeğiyle güzelleşen yaşam alanları.</p><InstagramLink>Instagram <Arrow /></InstagramLink><small>© {new Date().getFullYear()} Badeli Design</small></footer><ProductDialog product={selected} onClose={() => setSelected(null)} />
    <InstagramButton />
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
