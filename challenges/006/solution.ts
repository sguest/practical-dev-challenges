// The dev.to challenge doesn't have nearly enough info to do this
// got the rest of the challenge from the original codewars post https://www.codewars.com/kata/help-your-granny/javascript
// still a bit of guesswork
export function run(friends: string[], towns: {[key: string] :string}, distances: {[key: string]: number}): number {
    let distance = 0;
    let started = false;
    let lastTown = '';

    for(let friend of friends) {
        if(towns[friend]) {
            let town = towns[friend];
            if(!distances[town]) {
                throw new Error(`Distance for town ${town} not specified`);
            }

            if(started) {
                distance += Math.sqrt(Math.pow(distances[town], 2) - Math.pow(distances[lastTown], 2));
            }
            else {
                distance += distances[town];
            }
            started = true;
            lastTown = town;
        }
    }

    distance += distances[lastTown];
    return distance;
}