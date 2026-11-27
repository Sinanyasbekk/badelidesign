import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { categories, products, filterProducts, getSubcategories } from './products.js';
test('Her ürün benzersiz kimlik, geçerli kategori ve yerel görsel içerir', () => {
  assert.equal(new Set(products.map(p => p.id)).size, products.length);
  for (const product of products) {
    assert.ok(categories.includes(product.category));
    for (const image of [product.image, ...(product.images || [])]) assert.ok(existsSync(`public${image}`));
  }
});
test('Alt kategoriler yalnızca ana kategorideki ürünleri sayar ve aramayla birleşir', () => {
  const groups = getSubcategories('Tepsiler');
  assert.deepEqual(groups.map(group => group.name).sort(), ['4-6 Kişilik Tepsiler', 'Tek Kişilik Tepsiler']);
  assert.equal(groups.reduce((sum, group) => sum + group.count, 0), 33);
  assert.equal(filterProducts('Tepsiler', '', 'Tek Kişilik Tepsiler').length, 30);
  assert.equal(filterProducts('Tepsiler', 'kır çiçeği', '4-6 Kişilik Tepsiler')[0].id, 'kir-cicegi-tepsi');
  assert.equal(filterProducts('Tepsiler', 'zeytin', 'Tek Kişilik Tepsiler').length, 0);
  assert.equal(filterProducts('Çok Satanlar', '', '4-6 Kişilik Tepsiler')[0].id, 'zeytin-tepsi');
});
test('Kategori ve arama birlikte uygulanır; Türkçe harfler desteklenir', () => {
  assert.equal(filterProducts('Tepsiler').length, 33);
  assert.equal(filterProducts('Tümü', '  KIR ÇİÇEĞİ ').length, 1);
  assert.equal(filterProducts('Sehpalar', 'Zeytin').length, 0);
  assert.equal(filterProducts('Tümü', 'bulunmayan').length, 0);
});
