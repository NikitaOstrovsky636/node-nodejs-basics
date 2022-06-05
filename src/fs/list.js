import { readdir, access } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'files');

const folderExists = async path => access(path).then(() => true).catch(() => false);

export const list = async () => {
    try {
        const isFolderExists = await folderExists(folderPath);

        if (!isFolderExists) {
            throw new Error('FS operation failed');
        } else {
            const files = await readdir(folderPath);
            console.log(files);
        }
    } catch (err) {
        console.log(err);
    }
};

list();