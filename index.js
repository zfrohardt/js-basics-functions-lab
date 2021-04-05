// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(x, y) {
    return Math.abs(x - y) * 264;
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    if (distance < 401) {
        return 0;
    } else if (distance < 2001) {
        return 0.02 * (distance - 400);
    } else if (distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}