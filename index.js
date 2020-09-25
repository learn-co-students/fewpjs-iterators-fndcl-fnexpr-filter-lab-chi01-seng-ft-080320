// Code your solution here

function findMatching(drivers, index) {
    return drivers.filter(driver => driver.toLowerCase() === index.toLowerCase());
}

function fuzzyMatch(drivers, index) {
    return drivers.filter(driver => driver.slice(0, index.length).toLowerCase() === index.toLowerCase());
}

function matchName(drivers, index) {
    return drivers.filter(driver => driver.name === index);
}