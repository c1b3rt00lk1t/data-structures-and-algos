const binarySearch = (sortedArray, value) => {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right){
        let middle = left + Math.floor((right - left)/2);
        if (sortedArray[middle] === value){
            return middle;
        } else if (sortedArray[middle] > value){
            right = middle - 1;
        } else {
            left = middle + 1;
        };
    }
    return -1;
    
}

const exampleSortedArray = [1,2,3,5,6,7,8,9,10,51,55,79];

// binarySearch(exampleSortedArray,67)