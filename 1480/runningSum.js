//input -> list
//return -> list

//1 <= nums <=1000

var runningSum = function (nums) {
    //to be returned
    var runningList = [];
    //running sum
    var currentSum = 0;
    //for each number in nums list, add to current sum & push to runningList
    for (let num of nums) {
        currentSum += num;
        runningList.push(currentSum);
    }
    //once done, return runningList
    return runningList;
};

console.log(runningSum([1, 2, 3, 4]));
