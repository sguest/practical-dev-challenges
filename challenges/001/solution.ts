export function run(input: string): string | null {
    return input.length <= 2 ? null : input.substring(1, input.length - 1);
}