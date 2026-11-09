import React, { useState } from 'react';

export default function ProductGallery({ product }) {
  const photos = [...new Set([product.image, ...(product.images || [])])];
  const [selected, setSelected] = useState(0);
  return <div className="product-gallery" aria-label={`${product.name} görselleri`}>
    <div className="product-gallery-main"><img src={photos[selected]} alt={`${product.name} — ${product.imageCaptions?.[selected] || `görsel ${selected + 1}`}`} /></div>
    {product.imageCaptions?.[selected] && <p className="product-gallery-caption">{product.imageCaptions[selected]}</p>}
    {photos.length > 1 && <>
      <div className="product-gallery-thumbnails" aria-label="Ürün görseli seçimi">{photos.map((src, index) => <button key={src} aria-label={`${product.name}, görsel ${index + 1}`} aria-pressed={selected === index} onClick={() => setSelected(index)}><img src={src} alt="" loading="lazy"/></button>)}</div>
      <div className="product-gallery-controls"><button aria-label="Önceki ürün görseli" onClick={() => setSelected((selected + photos.length - 1) % photos.length)}>←</button><span aria-live="polite">{selected + 1} / {photos.length}</span><button aria-label="Sonraki ürün görseli" onClick={() => setSelected((selected + 1) % photos.length)}>→</button></div>
    </>}
  </div>;
}
