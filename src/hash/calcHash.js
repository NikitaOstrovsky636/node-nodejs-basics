import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import {fileURLToPath} from 'url';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    
    const fileData = fs.createReadStream(filePath, 'utf-8');

    for await(const chunk of fileData) {
        hash.update(chunk);
    }

    console.log(hash.digest('hex'));
};

calculateHash();