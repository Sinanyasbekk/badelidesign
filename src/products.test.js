import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { categories, products, filterProducts, getSubcategories } from './products.js';
test('Her ürün benzersiz kimlik, geçerli kategori ve yerel görsel içerir', () => {
  assert.equal(new Set(products.map(p => p.id)).size, products.length);
  for (const product of products) { assert.ok(categories.includes(product.category)); assert.ok(existsSync(`public${product.image}`)); }
});
test('Alt kategoriler yalnızca ana kategorideki ürünleri sayar ve aramayla birleşir', () => {
  const groups = getSubcategories('Tepsiler');
  assert.deepEqual(groups.map(group => group.name), ['Zeytin Desenli', 'Çiçek Desenli']);
  assert.equal(groups.reduce((sum, group) => sum + group.count, 0), 2);
  assert.equal(filterProducts('Tepsiler', '', 'Çiçek Desenli')[0].id, 'kir-cicegi-tepsi');
  assert.equal(filterProducts('Tepsiler', 'zeytin', 'Çiçek Desenli').length, 0);
  assert.equal(filterProducts('Çok Satanlar', '', 'Çiçek Desenli')[0].id, 'bahar-sehpa');
});
test('Kategori ve arama birlikte uygulanır; Türkçe harfler desteklenir', () => {
  assert.equal(filterProducts('Tepsiler').length, 2);
  assert.equal(filterProducts('Tümü', '  KIR ÇİÇEĞİ ').length, 1);
  assert.equal(filterProducts('Sehpalar', 'Zeytin').length, 0);
  assert.equal(filterProducts('Tümü', 'bulunmayan').length, 0);
});
