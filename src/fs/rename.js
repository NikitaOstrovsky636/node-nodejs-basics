import { rename as renameFile, access } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const fileExists = async path => access(path).then(() => true).catch(() => false);

export const rename = async () => {
    try {
        const isOldFileExists = await fileExists(oldPath);
        const isNewFileExists = await fileExists(newPath);

        if (!isOldFileExists || isNewFileExists) {
            throw new Error('FS operation failed');
        } else {
            await renameFile(oldPath, newPath);
        }
    } catch (err) {
        throw new Error(err);
    }
};

rename();