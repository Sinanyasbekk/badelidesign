import React from 'react';
import { productSubcategories } from './products.js';
import { productInformation } from './productInformation.js';

export default function ProductInformation({ product }) {
  const info = productInformation[product.id];
  if (!info) return null;
  const specs = [
    ['Marka', 'Badeli Design'], ['Desen', productSubcategories[product.id]],
    ['Malzeme', info.material], ['Boyut', info.size], ['Parça Sayısı', info.pieces],
    ['Renk', info.color], ['Uygulama', 'El boyaması ve dekoratif çizim'],
  ];
  return <section className="product-information" aria-label="Ürün bilgileri">
    <div className="product-information-heading"><h3>Ürün Bilgileri</h3><span>TEMSİLİ BİLGİLER</span></div>
    <p className="product-information-notice">Malzeme, ölçü ve diğer teknik bilgiler tasarım amaçlı örnektir; gerçek ürün özelliklerini belirtmez.</p>
    <dl className="product-specifications">{specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    <div className="product-description"><h4>{info.title}</h4><p>{info.story}</p><details><summary>Devamını gör</summary><p>{info.detail}</p></details></div>
    <div className="product-care"><h4>Bakım ve Kullanım</h4><p>Bu örnek çalışma için yumuşak bir bezle hassas temizlik önerisi düşünülmüştür. Gerçek ürüne ait temizlik ve kullanım talimatlarını işletmeden öğrenebilirsiniz.</p></div>
  </section>;
}
