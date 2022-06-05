import path from 'path';
import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.join(__dirname, 'files', 'fileToCompress.txt');
const output = path.join(__dirname, 'files', 'archive.gz');

export const compress = async () => {

    const gzip = createGzip();

    const sourse = createReadStream(input, 'utf8');
    const destination= createWriteStream(output);

    sourse.pipe(gzip).pipe(destination);
};

compress();