import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import QRCode from 'qrcode';
import { getQrDefinitions } from '../src/lib/services/qr.js';

const outDir = join(import.meta.dir, '..', 'static', 'qr');
mkdirSync(outDir, { recursive: true });

for (const { id, payload } of getQrDefinitions()) {
	const svg = await QRCode.toString(payload, {
		type: 'svg',
		errorCorrectionLevel: 'M',
		margin: 4
	});
	writeFileSync(join(outDir, `${id}.svg`), svg);
	console.log(`✔ Generated static/qr/${id}.svg for: ${payload}`);
}
