// Code your solution here
function findMatching(array, string) {  
    let drivers = array.filter(name => name.toLowerCase() === string.toLowerCase());
    return drivers
}

function fuzzyMatch(array, string) {
    let matches = array.filter(name => {
        return name.toLowerCase().indexOf(string.toLowerCase()) === 0
    })
    return matches
}

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

function matchName(array, string) {
    let drivers = array.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
    return drivers
}