import { Worker } from 'worker_threads';
import {fileURLToPath} from 'url';
import path from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
    const coresNum = os.cpus().length;
    let arr = [];

    for (let i = 10; i < coresNum + 10; i++) {

        arr.push(
            new Promise( (resolve, reject) => {
                    new Worker(workerPath, {
                        workerData: i
                    }).on('message', data => {
                        resolve({
                            status: 'resolved',
                            data: data
                        });
                    }).on('error', () => {
                        reject({
                            status: 'error',
                            data: 'null'
                        })
                    })
            })
        )
    }

    return await Promise.all(arr);
};

console.log(await performCalculations());