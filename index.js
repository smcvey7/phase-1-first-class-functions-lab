const returnFirstTwoDrivers = function(list){
    return list.slice(0, 2);
};

const returnLastTwoDrivers = function(list){
    return list.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    };
};

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(list, action){
    return action(list);
};