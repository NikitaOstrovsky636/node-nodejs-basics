import { readFile, access } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const fileExists = async path => access(path).then(() => true).catch(() => false);

export const read = async () => {
    try {
        const isFileExists = await fileExists(filePath);
        if (!isFileExists) {
            throw new Error('FS operation failed');
        } else {
            let data = await readFile(filePath);
            data = data.toString();
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
};

read();