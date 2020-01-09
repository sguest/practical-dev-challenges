import 'mocha';
import { strict as assert } from 'assert';
import { run } from './solution';

describe('Challenge 3', () => {
    it('should handle lowercase', () => {
        assert.equal(run('abcdefg'), 2);
    });
    it('should handle uppercase', () => {
        assert.equal(run('ABCDEFG'), 2);
    });
    it('should handle mixed case', () => {
        assert.equal(run('aBcDEfG'), 2);
    });
    it('should handle numbers and symbols', () => {
        assert.equal(run('a-e+=*df/u'), 3);
    });
    it('should handle empty string', () => {
        assert.equal(run(''), 0);
    });
    it('should handle no vowels', () => {
        assert.equal(run('bcdfg'), 0);
    });
});