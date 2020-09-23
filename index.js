// Code your solution here


function findMatching(drivers, target){
    return drivers.filter(driver => {
        return driver.toLowerCase() === target.toLowerCase()
    })
}

function fuzzyMatch(drivers, target){
    return drivers.filter(driver => {
        let comparison = driver.slice(0, target.length).toLowerCase()
        return comparison === target.toLowerCase()
    });
}


function matchName(drivers, target){
    return drivers.filter(driver => driver.name === target)
}