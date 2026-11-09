import React from 'react';
import { getSubcategories } from './products.js';

export default function CollectionSubcategories({ category, selected, onSelect }) {
  const groups = getSubcategories(category);
  if (groups.length === 0) return null;
  return <div className="collection-subcategories" aria-label="Koleksiyon alt kategorileri">
    <span>Alt kategoriler</span>
    {[{ name: '', count: groups.reduce((sum, group) => sum + group.count, 0) }, ...groups].map(group => <button key={group.name} className={selected === group.name ? 'active' : ''} aria-pressed={selected === group.name} onClick={() => onSelect(group.name)}>{group.name || 'Tümü'} <small>{group.count}</small></button>)}
  </div>;
}
