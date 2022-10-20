// array reverse recursive function
function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    return [arr.pop()].concat(reverseArray(arr));
}