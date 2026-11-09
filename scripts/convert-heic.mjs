import { readFile, writeFile } from 'node:fs/promises';
import convert from 'heic-convert';

const [source, destination] = process.argv.slice(2);
if (!source || !destination || !/\.jpe?g$/i.test(destination)) {
  throw new Error('Kullanım: node scripts/convert-heic.mjs kaynak.HEIC hedef.jpg');
}
const result = await convert({ buffer: await readFile(source), format: 'JPEG', quality: 0.9 });
await writeFile(destination, result);
console.log(`JPEG hazır: ${destination} (${result.byteLength} bayt)`);
