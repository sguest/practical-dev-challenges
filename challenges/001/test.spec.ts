import 'mocha';
import { strict as assert } from 'assert';
import { run } from './solution';

describe('Challenge 1', () => {
    describe('invalid inputs', () => {
        it('should handle empty string', () => {
            assert.equal(run(''), null);
        });
        it('should handle length 1 string', () => {
            assert.equal(run('a'), null);
        });
        it('should handle length 2 string', () => {
            assert.equal(run('ab'), null);
        });
    });

    describe('valid inputs', () => {
        it('should strip first and last characters', () => {
            assert.equal(run('abcde'), 'bcd');
        });
    });
});