import { Rino } from 'rinojs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

async function dev()
{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    let rino = new Rino();
    await rino.dev(path.resolve(__dirname, "./"));
}

dev();