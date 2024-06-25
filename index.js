const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//return drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}
//fare multiplier
function createFareMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

// fare doubler
function fareDoubler(fare) {
    return fare * 2;
}

//fare trippler
function fareTripler(fare) {
    return fare * 3;
}
