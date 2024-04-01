function search(arr, target, start, end) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] > target) {
        return search(arr, target, start, mid - 1);
    } else {
        return search(arr, target, mid + 1, end);
    }
}

function binarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}
// Big-O = O(log n)

console.log(binarySearch([2, 15, 23, 74, 88], 88));