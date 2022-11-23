// Code your solution in this file!
const distanceFromHqInBlocks = function(pickupLocation) {
    return Math.abs(42 - pickupLocation);
};

const distanceFromHqInFeet = function(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
};

const distanceTravelledInFeet = function(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
};

const calculatesFarePrice = function(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    let fare;
    switch (true) {
        case distance <= 400:
            fare = 0;
            break;
        case distance < 2000:
            fare = (distance - 400) * 0.02;
            break;
        case distance < 2500:
            fare = 25;
            break;
        default:
            fare = 'cannot travel that far';
            break;
    };
    return fare;
};