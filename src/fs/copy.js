import { readdir, mkdir, copyFile, access } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = path.join(__dirname, 'files');
const targetPath = path.join(__dirname, 'files_copy');

const folderExists = async path => access(path).then(() => true).catch(() => false);

export const copy = async () => {
    try {
        const isExists = await folderExists(targetPath)

        if(isExists) {
            throw new Error('FS operation failed');
        } else {
            await mkdir(targetPath);

            const files = await readdir(sourcePath, {withFileTypes: true});

            files.forEach(file => {
                copyFile(path.join(sourcePath, file.name), path.join(targetPath, file.name));
            });
        }

    } catch (err) {
        throw new Error(err);
    }
};

copy();