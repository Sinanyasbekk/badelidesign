import React, { useRef, useState } from 'react';
import { filterProducts } from './products.js';

function SearchIcon() {
  return <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>;
}
export default function HeaderSearch({ onProduct }) {
  const input = useRef(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const results = filterProducts('Tümü', query);
  function choose(product) {
    input.current.focus();
    setOpen(false);
    onProduct(product);
  }
  function keyboard(event) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      input.current.focus();
      setOpen(false);
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      const buttons = [...event.currentTarget.querySelectorAll('.header-search-results>button')];
      const index = buttons.indexOf(document.activeElement);
      if (event.key === 'ArrowDown') buttons[Math.min(index + 1, buttons.length - 1)]?.focus();
      else if (index > 0) buttons[index - 1].focus();
      else input.current.focus();
    }
  }
  return <div className="header-search" onKeyDown={keyboard} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <form className="header-search-bar" role="search" onSubmit={event => { event.preventDefault(); if (results.length) choose(results[0]); else setOpen(true); }}>
      <button type="submit" aria-label="Ürün ara"><SearchIcon/></button>
      <input ref={input} type="search" value={query} onFocus={() => setOpen(true)} onChange={event => { setQuery(event.target.value); setOpen(true); }} placeholder="Ne arıyorsunuz? Tepsi, sehpa, sunumluk…" aria-label="Tüm ürünlerde ara" autoComplete="off"/>
    </form>
    {open && <section className="header-search-dropdown" aria-label="Arama sonuçları">
      <div className="header-search-summary"><p className="header-search-count" role="status">{query.trim() ? `${results.length} tasarım bulundu` : 'Tasarımları keşfedin'}</p><button className="category-close" aria-label="Arama sonuçlarını kapat" onClick={() => { input.current.focus(); setOpen(false); }}>×</button></div>
      <div className="header-search-results">{results.map(product => <button key={product.id} onClick={() => choose(product)}><img src={product.image} alt=""/><span><strong>{product.name}</strong><small>{product.category}</small></span><span aria-hidden="true">↗</span></button>)}</div>
      {results.length === 0 && <div className="header-search-empty"><p>Aramanıza uygun bir tasarım bulamadık.</p><button className="text-link" onClick={() => { setQuery(''); input.current.focus(); }}>Tüm tasarımları göster</button></div>}
    </section>}
  </div>;
}
