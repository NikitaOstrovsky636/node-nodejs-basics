import path from 'path';
import { createUnzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.join(__dirname, 'files', 'archive.gz');
const output = path.join(__dirname, 'files', 'fileToCompress.txt');

export const decompress = async () => {

    const unzip = createUnzip();

    const sourse = createReadStream(input);
    const destination= createWriteStream(output);

    sourse.pipe(unzip).pipe(destination);
};

decompress();