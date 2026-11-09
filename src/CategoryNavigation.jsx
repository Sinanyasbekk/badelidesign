import React, { useEffect, useRef, useState } from 'react';
import { categories, filterProducts } from './products.js';

export default function CategoryNavigation({ onBrowse, onProduct }) {
  const [preview, setPreview] = useState(null);
  const root = useRef(null);
  const lastTrigger = useRef(null);
  useEffect(() => {
    function outside(event) {
      if (!root.current?.contains(event.target)) setPreview(null);
    }
    function escape(event) {
      if (event.key === 'Escape') {
        lastTrigger.current?.focus();
        setPreview(null);
      }
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, []);
  const items = preview ? filterProducts(preview) : [];
  function browse() {
    onBrowse(preview);
    setPreview(null);
  }
  return <div className="category-navigation" ref={root}
    onMouseLeave={() => setPreview(null)}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPreview(null); }}>
    <nav className="category-bar wrap" aria-label="Ürün kategorileri">
      <a className="category-home" href="#" onMouseEnter={() => setPreview(null)} onClick={() => setPreview(null)}>Ana Sayfa</a>
      {categories.map(category => <button key={category} type="button"
        className={preview === category ? 'category-trigger is-open' : 'category-trigger'}
        aria-expanded={preview === category} aria-controls="category-preview"
        onPointerEnter={event => { if (event.pointerType === 'mouse') setPreview(category); }}
        onFocus={event => { lastTrigger.current = event.currentTarget; if (event.currentTarget.matches(':focus-visible')) setPreview(category); }}
        onClick={event => { lastTrigger.current = event.currentTarget; setPreview(category); }}>
        {category === 'Tümü' ? 'Tüm Tasarımlar' : category}
      </button>)}
    </nav>
    {preview && <section className="category-preview" id="category-preview" aria-label={`${preview} ürün önizlemesi`}>
      <div className="wrap">
        <div className="category-preview-heading"><div><h2>{preview === 'Tümü' ? 'Tüm Tasarımlar' : preview}</h2><span>{items.length} tasarım</span></div>
          <div className="category-preview-actions"><a className="text-link" href="#koleksiyon" onClick={browse}>Koleksiyonda görüntüle <span aria-hidden="true">↗</span></a><button className="category-close" aria-label="Kategori önizlemesini kapat" onClick={() => { lastTrigger.current?.focus(); setPreview(null); }}>×</button></div>
        </div>
        <div className="category-preview-grid">{items.map(product => <button key={product.id} className="category-preview-card" onClick={() => { lastTrigger.current?.focus(); setPreview(null); onProduct(product); }}>
          <img src={product.image} alt="" loading="lazy" /><span>{product.name}</span><small>{product.category}</small>
        </button>)}</div>
        <p className="category-preview-note">Görseller ve ürün adları temsili tasarım örnekleridir.</p>
      </div>
    </section>}
  </div>;
}
