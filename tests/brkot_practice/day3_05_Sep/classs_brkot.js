
function intersection(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }

    return result;
}


// function intersection(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         let newarr1 = arr1[i];

//         // Check if element exists in arr2 and not repeated in result
//         if (arr2.includes(newarr1) && !result.includes(newarr1)) {
//             result.push(newarr1);
//         }
//     }

//     return result;
// }

console.log(intersection([1, 2, 3], [3, 4, 5, 6]));

console.log(intersection([1, 2, 3], [4, 5, 6]));

console.log(intersection([1, 2, 3], [1, 2, 3]));

console.log(intersection([1, 2, 3, 4], [2, 2, 4, 4, 5]));