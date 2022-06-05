import { env } from 'node:process';

export const parseEnv = () => {
    const arrayFromEnv = [];

    for(let prop in env) {
        if (prop.startsWith('RSS_')) {
            arrayFromEnv.push(`${prop}=${env[prop]}`);
        }
    }

    console.log(arrayFromEnv.join('; '));
};

parseEnv();