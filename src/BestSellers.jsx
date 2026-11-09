import React from 'react';
import { filterProducts } from './products.js';

export default function BestSellers({ onProduct, onBrowse }) {
  const products = filterProducts('Çok Satanlar');
  if (products.length === 0) return null;
  const demo = products.some(product => product.demo);
  return <section className="best-sellers" id="cok-satanlar" aria-labelledby="best-sellers-title"><div className="wrap">
    <div className="best-sellers-heading"><div><h2 id="best-sellers-title">Çok Satanlar</h2>{demo && <span className="selection-badge">TEMSİLİ SEÇKİ</span>}</div><a href="#koleksiyon" className="text-link" onClick={onBrowse}>Tümünü gör <span aria-hidden="true">↗</span></a></div>
    {demo && <p className="best-sellers-note">Bu bölüm temsili ürünlerle hazırlanmıştır; gerçek satış sıralamasını yansıtmaz.</p>}
    <div className="best-sellers-grid">{products.map(product => <article className="best-seller-card" key={product.id}>
      <button className="best-seller-image" onClick={() => onProduct(product)} aria-label={`${product.name} ürün detayını aç`}><img src={product.image} alt={`${product.name}${product.demo ? ' — temsili ürün çizimi' : ''}`} loading="eager"/><span className="selection-badge">{product.demo ? 'TASARIM ÖRNEĞİ' : 'ÇOK SATAN'}</span></button>
      <div className="card-category">{product.category}</div><button className="product-title" onClick={() => onProduct(product)}>{product.name}</button><p>{product.subtitle}</p>
      <button className="best-seller-detail" onClick={() => onProduct(product)} aria-label={`${product.name} tasarımını incele`}>Tasarımı incele <span aria-hidden="true">↗</span></button>
    </article>)}</div>
  </div></section>;
}
