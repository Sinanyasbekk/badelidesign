import React, { useRef, useState } from 'react';
import { filterProducts } from './products.js';

function SearchIcon() {
  return <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>;
}
export default function HeaderSearch({ onProduct }) {
  const dialog = useRef(null);
  const input = useRef(null);
  const [query, setQuery] = useState('');
  const results = filterProducts('Tümü', query);
  function close() { dialog.current.close(); }
  return <>
    <button className="header-search-button" aria-label="Ürün aramasını aç" aria-haspopup="dialog" onClick={() => { setQuery(''); dialog.current.showModal(); input.current.focus(); }}><SearchIcon/><span>Ara</span></button>
    <dialog ref={dialog} className="header-search-dialog" aria-labelledby="header-search-title" onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="header-search-heading"><h2 id="header-search-title">Bir tasarım keşfedin.</h2><button className="category-close" aria-label="Aramayı kapat" onClick={close}>×</button></div>
      <label className="header-search-input"><SearchIcon/><input ref={input} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Ürün adı veya kategori yazın" aria-label="Tüm ürünlerde ara"/></label>
      <p className="header-search-count" role="status">{query.trim() ? `${results.length} tasarım bulundu` : 'Tüm tasarımlar'}</p>
      <div className="header-search-results">{results.map(product => <button key={product.id} onClick={() => { close(); onProduct(product); }}><img src={product.image} alt=""/><span><strong>{product.name}</strong><small>{product.category}</small></span><span aria-hidden="true">↗</span></button>)}</div>
      {results.length === 0 && <div className="header-search-empty"><p>Aramanıza uygun bir tasarım bulamadık.</p><button className="text-link" onClick={() => { setQuery(''); input.current.focus(); }}>Tüm tasarımları göster</button></div>}
    </dialog>
  </>;
}
