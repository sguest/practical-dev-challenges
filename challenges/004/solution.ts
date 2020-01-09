function formatNum(input: number): string {
    return (Math.round(input * 100) / 100).toFixed(2);
}

export function run(input: string): string {
    input = input.replace(/[^0-9a-z\.\s]/ig, '');

    let lines = input.split('\n');

    let balance = +lines.shift()!;

    let outputLines = [`Original_Balance: ${formatNum(balance)}`];

    let prices: number[] = [];

    for(let line of lines) {
        let parts = line.split(' ');
        let price = +parts[2];
        prices.push(price);
        balance -= price;
        outputLines.push(`${parts[0]} ${parts[1]} ${formatNum(price)} Balance ${formatNum(balance)}`);
    }

    let totalExpense = prices.reduce((prev, current) => prev + current);
    outputLines.push(`Total expense ${formatNum(totalExpense)}`);
    let averageExpense = totalExpense / lines.length;
    outputLines.push(`Average expense ${formatNum(averageExpense)}`);

    return outputLines.join('\n');
}