import 'mocha';
import { strict as assert } from 'assert';
import { run } from './solution';

describe('Challenge 3', () => {
    it('should handle lowercase', () => {
        assert.equal(2, run('abcdefg'));
    });
    it('should handle uppercase', () => {
        assert.equal(2, run('ABCDEFG'));
    });
    it('should handle mixed case', () => {
        assert.equal(2, run('aBcDEfG'));
    });
    it('should handle numbers and symbols', () => {
        assert.equal(3, run('a-e+=*df/u'));
    });
    it('should handle empty string', () => {
        assert.equal(0, run(''));
    });
    it('should handle no vowels', () => {
        assert.equal(0, run('bcdfg'));
    });
});