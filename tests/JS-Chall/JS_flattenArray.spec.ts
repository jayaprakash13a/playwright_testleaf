function flattenArray(arr: unknown[]): unknown[] {
    const result: unknown[] = [];
    // Traverse each value of the input array
    for (const value of arr) {

        // If the value is an array, recursively flatten it
        if (Array.isArray(value)) {
            result.push(...flattenArray(value));
        } 
        // Otherwise, add the value directly to the result
        else {
            result.push(value);
        }
    }

    return result;
}

// Test cases
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
// [1, 2, 3, 4, 5, 6]

console.log(flattenArray(["a", ["b", "c"], "d"]));
// ["a", "b", "c", "d"]

console.log(flattenArray([1, [2, [3, [4]]], 5]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([true, [false, [true]], "test"]));
// [true, false, true, "test"]

console.log(flattenArray([]));
// []