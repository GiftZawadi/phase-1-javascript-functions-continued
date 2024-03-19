// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "a hard worker") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}