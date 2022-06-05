import { writeFile, access } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.join(__dirname, 'files', 'fresh.txt');

const fileExists = async path => access(path).then(() => true).catch(() => false);

export const create = async () => {
    try {

        if (await fileExists(targetPath)) {
            throw new Error('FS operation failed');
        } else {
            await writeFile(targetPath, 'I am fresh and young', 'utf-8');
        }

    } catch (err) {
        console.log(err);
    }
};

create();