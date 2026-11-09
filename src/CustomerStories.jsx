import React from 'react';
import { customerHighlightsUrl, customerStories } from './customerStories.js';

export default function CustomerStories() {
  // İçerik gelene kadar boş galeri veya temsili müşteri paylaşımı gösterilmez.
  if (customerStories.length === 0) return null;
  return <section id="sizden-gelenler" className="customer-stories wrap" aria-labelledby="customer-stories-title">
    <div className="section-heading">
      <div><span className="eyebrow">SİZİN KARELERİNİZDEN</span><h2 id="customer-stories-title">Sizden <em>gelenler.</em></h2></div>
      <a className="text-link" href={customerHighlightsUrl} target="_blank" rel="noopener noreferrer">Instagram’da tümünü görün <span aria-hidden="true">↗</span></a>
    </div>
    <div className="customer-stories-grid">{customerStories.map(story => <figure key={story.id} className="customer-story">
      {story.type === 'video'
        ? <video controls playsInline preload="none" poster={story.poster} aria-label={story.caption || 'Müşterimizden video paylaşımı'}><source src={story.src} type="video/mp4" />Videoyu tarayıcınızda oynatamıyorsanız <a href={story.src}>buradan açabilirsiniz</a>.</video>
        : <a href={story.src} target="_blank" rel="noopener noreferrer" aria-label={`${story.alt} — tam boy aç`}><img src={story.src} alt={story.alt} loading="lazy" /></a>}
      {story.caption && <figcaption>{story.caption}</figcaption>}
    </figure>)}</div>
  </section>;
}
