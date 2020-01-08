import 'mocha';
import { strict as assert } from 'assert';
import { diamond } from './solution';

describe('Challenge 1', () => {
    describe('invalid inputs', () => {
        it('should handle even number', () => {
            assert.equal(null, diamond(2));
        }                 
        );
        it('should handle negative number', () => {
            assert.equal(null, diamond(-1));
        });
        it('should handle negative zero', () => {
            assert.equal(null, diamond(0));
        });
    });

    describe('valid inputs', () => {
        it('should handle 1', () => {
            assert.equal('*', diamond(1));
        });

        it('should handle 3', () => {
            assert.equal(' * \n***\n * ', diamond(3));
        });

        it('should handle 5', () => {
            assert.equal('  *  \n *** \n*****\n *** \n  *  ', diamond(5));
        });
    });
});