/*
Exercise:
The tank is driving along a road that may have anti-tank mines on it. 
The road should be represented as a roadMines array of 10 boolean elements. 
If the element is true, then it is a mine. The movement of the tank should be represented as a cycle, 
in which one iteration is the movement of the tank to the next section of the road 
(the next element of the array). When moving, display the message “the tank has moved to ${position}” 
in the console, where position is the cell number + 1. If the tank hits a mine, 
then you need to display the message “the tank is damaged,” if this is the 1st explosion, 
and “the tank is destroyed "if this is the 2nd explosion. After the 2nd explosion, 
the tank is considered destroyed and stops moving.
*/

let roadMines = [false, false, false, false, true, false, false, false, true, false];
let mine = 0;

for (let i = 0; i < roadMines.length; i++) {
    let position = i + 1;
    console.log(`the tank has moved to ${position}`);

    if (roadMines[i] && mine >= 1) {
        console.log('the tank is destroyed');
        break;
    }

    if (roadMines[i] && mine < 1) {
        console.log('the tank is damaged');
        mine++;
    }
}
