import 'mocha';
import { strict as assert } from 'assert';
import { run } from './solution';

describe('Challenge 6', () => {
    it('should calculate distance', () => {
        let friends = ['A1', 'A2', 'A3', 'A4', 'A5'];

        let towns = {
            A1: 'X1',
            A2: 'X2',
            A3: 'X3',
            A4: 'X4',
        };

        let distances = {
            'X1': 100,
            'X2': 200,
            'X3': 250,
            'X4': 300,
        }
        assert.equal(Math.floor(run(friends, towns, distances)), 889);
    });
    it('should throw with unrecognized town', () => {
        assert.throws(() => {
            run(['a'], {a: 'b'}, {});
        });
    });
});