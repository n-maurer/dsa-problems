var removeDuplicates = function(nums) {
    var newNums = [];
    for (let i of nums){
        if (newNums.includes(i) === false) newNums.push(i);
    }return newNums;
};


console.log(removeDuplicates([1,1,2]))
