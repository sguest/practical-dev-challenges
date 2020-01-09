import 'mocha';
import { strict as assert } from 'assert';
import { randomWalk } from './solution';

function format(str: string): string {
    return str.replace(/^\s*/gm, '');
}

describe('Challenge 5', () => {
    it('should throw for odd number', () => {
        assert.throws(() => {
            randomWalk(1);
        });
    });
    it('should handle even number', () => {
        let result = randomWalk(6);
        assert.equal(result.length, 6, 'Incorrect length');
        assert.equal(result.filter(x => x === 'e').length, result.filter(x => x === 'w').length, 'Incorrect distance east/west');
        assert.equal(result.filter(x => x === 'n').length, result.filter(x => x === 's').length, 'Incorrect distance north/south');
    });
});