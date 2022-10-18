console.log('Hello world')

console.log('Team Seal')

function sort(nums) { 
    if(nums === null) {
        return []
    } else { 
        return nums.sort(sortNum)
    }
}

function sortNum(a, b) {
    return a - b
}

console.log(sort([1, 2, 50, 5, 3]))