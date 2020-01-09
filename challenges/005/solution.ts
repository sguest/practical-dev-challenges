function shuffle<T>(arr: T[]): T[] {
    for(let counter = arr.length - 1; counter >= 0; counter--) {
        let index = Math.floor(Math.random() * counter);

        [arr[counter], arr[index]] = [arr[index], arr[counter]];
    }

    return arr;
}

export function randomWalk(length: number): string[] {
    if(length % 2 !== 0) {
        throw new Error('Must walk an even distance');
    }

    let north = Math.floor(Math.random() * length / 2);
    let south = north;
    let east = (length - north - south) /  2;
    let west = east;

    return shuffle([...new Array(north).fill('n'), ...new Array(south).fill('s'), ...new Array(east).fill('e'), ...new Array(west).fill('w')]);
}