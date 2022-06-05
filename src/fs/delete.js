import { rm, access } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const fileExists = async path => access(path).then(() => true).catch(() => false);

export const remove = async () => {
    try {
        const isRemovedFileExists = await fileExists(filePath);

        if (!isRemovedFileExists) {
            throw new Error('FS operation failed');
        } else {
            await rm(filePath);
        }
    } catch (err) {
        console.log(err);
    }
};

remove();