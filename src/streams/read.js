import { createReadStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    const readableStream = createReadStream(filePath, 'utf-8');
    let data = '';

    for await (const chunk of readableStream) {
        data += chunk;
    }

    stdout.write(data);
};

read();