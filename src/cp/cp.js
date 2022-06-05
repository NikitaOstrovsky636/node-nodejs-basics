import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
    const child = spawn(process.execPath, [pathToFile, ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(process.argv.slice(2));