import React from 'react';
import { instagramUrl } from './products.js';

export default function InstagramButton() {
  return <a className="instagram-floating" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Badeli Design Instagram sayfasını aç (yeni sekme)">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
    <span>Instagram</span>
  </a>;
}
