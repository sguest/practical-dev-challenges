import 'mocha';
import { strict as assert } from 'assert';
import { run } from './solution';

function format(str: string): string {
    return str.replace(/^\s*/gm, '');
}

describe('Challenge 4', () => {
    it('should handle example case', () => {
        let input = format(`1000.00
            125 Market 125.45
            126 Hardware 34.95
            127 Video 7.45
            128 Book 14.32
            129 Gasoline 16.10`);

        let output = format(`Original_Balance: 1000.00
            125 Market 125.45 Balance 874.55
            126 Hardware 34.95 Balance 839.60
            127 Video 7.45 Balance 832.15
            128 Book 14.32 Balance 817.83
            129 Gasoline 16.10 Balance 801.73
            Total expense 198.27
            Average expense 39.65`);

        assert.equal(run(input), output);
    });
    it('should handle challenge case', () => {
        let input = format(`1233.00
            125 Hardware;! 24.8?;
            123 Flowers 93.5
            127 Meat 120.90
            120 Picture 34.00
            124 Gasoline 11.00
            123 Photos;! 71.4?;
            122 Picture 93.5
            132 Tires;! 19.00,?;
            129 Stamps 13.6
            129 Fruits{} 17.6
            129 Market;! 128.00?;
            121 Gasoline;! 13.6?;`);

        let output = format(`Original_Balance: 1233.00
            125 Hardware 24.80 Balance 1208.20
            123 Flowers 93.50 Balance 1114.70
            127 Meat 120.90 Balance 993.80
            120 Picture 34.00 Balance 959.80
            124 Gasoline 11.00 Balance 948.80
            123 Photos 71.40 Balance 877.40
            122 Picture 93.50 Balance 783.90
            132 Tires 19.00 Balance 764.90
            129 Stamps 13.60 Balance 751.30
            129 Fruits 17.60 Balance 733.70
            129 Market 128.00 Balance 605.70
            121 Gasoline 13.60 Balance 592.10
            Total expense 640.90
            Average expense 53.41`);

        assert.equal(run(input), output);
    });
});