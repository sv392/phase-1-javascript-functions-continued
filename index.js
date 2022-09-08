// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(visualFlair = "*") {
    function innerFunction(adjective = 'special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
        return innerFunction
    }

wrapAdjective('||')("a person built different")