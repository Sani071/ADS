const binarySearch = (array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 8) => {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === array[midIndex]) {
            //console.log("item found on ", midIndex);
            return midIndex;
        }
        if (target > array[midIndex]) {
            leftIndex = midIndex + 1
        } else if (target < array[midIndex]) {
            rightIndex = midIndex - 1;
        }
    }
    console.log("item not found")
}

const res = binarySearch();
console.log(res;)
