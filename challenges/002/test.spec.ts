import 'mocha';
import { strict as assert } from 'assert';
import { diamond } from './solution';

describe('Challenge 2', () => {
    describe('invalid inputs', () => {
        it('should handle even number', () => {
            assert.equal(diamond(2), null);
        }                 
        );
        it('should handle negative number', () => {
            assert.equal(diamond(-1), null);
        });
        it('should handle negative zero', () => {
            assert.equal(diamond(0), null);
        });
    });

    describe('valid inputs', () => {
        it('should handle 1', () => {
            assert.equal(diamond(1), '*');
        });

        it('should handle 3', () => {
            assert.equal(diamond(3), ' * \n***\n * ');
        });

        it('should handle 5', () => {
            assert.equal(diamond(5), '  *  \n *** \n*****\n *** \n  *  ');
        });
    });
});