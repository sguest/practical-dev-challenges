function line(value: number, size: number): string {
    let padding = ' '.repeat((size - value) / 2);
    return padding + '*'.repeat(value) + padding;
}

export function diamond(size: number): string | null {
    if(size < 0 || size % 2 === 0) {
        return null;
    }

    let lines: string[] = [];

    for(let i = 1; i <= size; i += 2) {
        lines.push(line(i, size));
    }

    for(let i = size - 2; i >= 1; i -= 2) {
        lines.push(line(i, size));
    }

    return lines.join('\n');
}