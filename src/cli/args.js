import {argv} from 'node:process';

export const parseArgs = () => {
    const arrOfArgs = [];

    for (let i = 2; i < argv.length; i++) {
        if (argv[i].startsWith('--')) {
            arrOfArgs.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
        }
    }

    console.log(arrOfArgs.join(', '));
};

parseArgs();