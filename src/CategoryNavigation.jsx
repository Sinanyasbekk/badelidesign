import React, { useEffect, useRef, useState } from 'react';
import { categories, filterProducts, getSubcategories } from './products.js';

export default function CategoryNavigation({ onBrowse, onProduct }) {
  const [preview, setPreview] = useState(null);
  const [subcategory, setSubcategory] = useState('');
  const root = useRef(null);
  const lastTrigger = useRef(null);
  const hoverTimer = useRef(null);
  useEffect(() => {
    function outside(event) {
      if (!root.current?.contains(event.target)) setPreview(null);
    }
    function escape(event) {
      if (event.key === 'Escape' && root.current?.contains(event.target)) {
        lastTrigger.current?.focus();
        setPreview(null);
      }
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      clearTimeout(hoverTimer.current);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, []);
  const allItems = preview ? filterProducts(preview) : [];
  const items = preview ? filterProducts(preview, '', subcategory) : [];
  const groups = preview ? getSubcategories(preview) : [];
  function openCategory(category) {
    clearTimeout(hoverTimer.current);
    if (preview !== category) setSubcategory('');
    setPreview(category);
  }
  function browse() {
    onBrowse(preview, subcategory);
    setPreview(null);
  }
  return <div className="category-navigation" ref={root}
    onMouseLeave={() => { clearTimeout(hoverTimer.current); setPreview(null); }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPreview(null); }}>
    <nav className="category-bar wrap" aria-label="Ürün kategorileri">
      <a className="category-home" href="#" onMouseEnter={() => setPreview(null)} onClick={() => setPreview(null)}>Ana Sayfa</a>
      {categories.map(category => <button key={category} type="button"
        className={preview === category ? 'category-trigger is-open' : 'category-trigger'}
        aria-expanded={preview === category} aria-controls="category-preview"
        onPointerEnter={event => { if (event.pointerType === 'mouse') { lastTrigger.current = event.currentTarget; openCategory(category); } }}
        onFocus={event => { lastTrigger.current = event.currentTarget; if (event.currentTarget.matches(':focus-visible')) openCategory(category); }}
        onClick={event => { lastTrigger.current = event.currentTarget; openCategory(category); }}>
        {category === 'Tümü' ? 'Tüm Tasarımlar' : category}
      </button>)}
    </nav>
    {preview && <section className="category-preview" id="category-preview" aria-label={`${preview} ürün önizlemesi`}>
      <div className="wrap">
        <div className="category-preview-heading"><div><h2>{preview === 'Tümü' ? 'Tüm Tasarımlar' : preview}</h2><span>{allItems.length} tasarım</span></div>
          <div className="category-preview-actions"><a className="text-link" href="#koleksiyon" onClick={browse}>Koleksiyonda görüntüle <span aria-hidden="true">↗</span></a><button className="category-close" aria-label="Kategori önizlemesini kapat" onClick={() => { lastTrigger.current?.focus(); setPreview(null); }}>×</button></div>
        </div>
        <div className="category-preview-layout">
        <aside className="subcategory-sidebar" aria-label={`${preview} alt kategorileri`}>
          {[{ name: '', count: allItems.length, image: allItems[0]?.image }, ...groups].map(group => <button key={group.name} className={subcategory === group.name ? 'subcategory-option active' : 'subcategory-option'} aria-pressed={subcategory === group.name}
            onPointerEnter={event => { if (event.pointerType === 'mouse') { clearTimeout(hoverTimer.current); hoverTimer.current = setTimeout(() => setSubcategory(group.name), 140); } }}
            onPointerLeave={() => clearTimeout(hoverTimer.current)}
            onFocus={() => setSubcategory(group.name)} onClick={() => setSubcategory(group.name)}>
            {group.image && <img src={group.image} alt=""/>}<span>{group.name || 'Tümünü Göster'}</span><small>{group.count}</small>
          </button>)}
        </aside>
        <div className="subcategory-products"><div className="subcategory-heading"><h3>{subcategory || 'Tüm Tasarımlar'}</h3><span aria-live="polite">{items.length} tasarım</span></div>
        <div className="category-preview-grid">{items.map(product => <button key={product.id} className="category-preview-card" onClick={() => { lastTrigger.current?.focus(); setPreview(null); onProduct(product); }}>
          <img src={product.image} alt="" loading="lazy" /><span>{product.name}</span><small>{product.category}</small>
        </button>)}</div>
        </div></div>
        <p className="category-preview-note">Görseller ve ürün adları temsili tasarım örnekleridir.</p>
      </div>
    </section>}
  </div>;
}
