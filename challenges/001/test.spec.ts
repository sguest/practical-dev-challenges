import 'mocha';
import { strict as assert } from 'assert';
import { run } from './solution';

describe('Challenge 1', () => {
    describe('invalid inputs', () => {
        it('should handle empty string', () => {
            assert.equal(null, run(''));
        }                 
        );
        it('should handle length 1 string', () => {
            assert.equal(null, run('a'));
        });
        it('should handle length 2 string', () => {
            assert.equal(null, run('ab'));
        });
    });

    describe('valid inputs', () => {
        it('should strip first and last characters', () => {
            assert.equal('bcd', run('abcde'));
        });
    });
});