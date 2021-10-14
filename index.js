// Code your solution in this file!


function returnFirstTwoDrivers (drivers){
    const newArray = []
        return [drivers[0], drivers[1]]
}

function returnLastTwoDrivers (drivers){
    const newArray2 = []
        return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]


function createFareMultiplier (initial){
    return function (second){
        return initial * second
    }
}

function fareDoubler (initial){
    return initial * 2
}


function fareTripler(initial){
    return initial * 3
}

function selectDifferentDrivers (drivers){
    return returnFirstTwoDrivers (drivers)
        
}

function selectDifferentDrivers (drivers){
    return function (returnLastTwoDrivers)
{}}