import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { categories, products, filterProducts } from './products.js';
test('Her ürün benzersiz kimlik, geçerli kategori ve yerel görsel içerir', () => {
  assert.equal(new Set(products.map(p => p.id)).size, products.length);
  for (const product of products) { assert.ok(categories.includes(product.category)); assert.ok(existsSync(`public${product.image}`)); }
});
test('Kategori ve arama birlikte uygulanır; Türkçe harfler desteklenir', () => {
  assert.equal(filterProducts('Tepsiler').length, 2);
  assert.equal(filterProducts('Tümü', '  KIR ÇİÇEĞİ ').length, 1);
  assert.equal(filterProducts('Sehpalar', 'Zeytin').length, 0);
  assert.equal(filterProducts('Tümü', 'bulunmayan').length, 0);
});
