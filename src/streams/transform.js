import { captureRejections } from 'events';
import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const reverse = new Transform({
    transform(chank, encoding, callback) {
        callback(null, chank
            .toString()
            .split('')
            .reverse()
            .join(''));
    }
});

export const transform = async () => {
    stdin.pipe(reverse).pipe(stdout);
};

transform();