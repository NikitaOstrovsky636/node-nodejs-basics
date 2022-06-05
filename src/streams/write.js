import { createWriteStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
    const output = createWriteStream(targetPath, 'utf-8');

    stdin.on('data', data => {
        output.write(data);
    })
};

write();