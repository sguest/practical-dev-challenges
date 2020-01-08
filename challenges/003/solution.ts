export function run(input: string): number {
    let count = 0;
    let regex = /[aeiou]/ig;
    while(regex.exec(input)) {
        count++;
    }

    return count;
}