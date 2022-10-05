// const arry = [11, 22, 11, 33, 44, 33, 55];

// const toFindDuplicates = arry => arry.filter((item, index) => {
//     console.log(item, index, arry.indexOf(item));
//    return arry.indexOf(item) !== index;
// });
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);  



// function toFindDuplicates(arry) {
//     const uniqueElements = new Set(arry);
//     console.log(uniqueElements);
//     const filteredElements = arry.filter(item => {
//        // console.log(item);
//         if (uniqueElements.has(item)) {
//             uniqueElements.delete(item);
//           //  console.log(item);
//         } else {
//             return item;
//         }
//     });

//     return [...new Set(uniqueElements)]
// }

// const arry = [1, 2, 1, 3, 4, 3, 5];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);




toFindDuplicates();

function toFindDuplicates() {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let toMap = {};
    let resultToReturn = false;
    for (let i = 0; i < arry.length; i++) {
       console.log("tomap" + toMap[arry[i]]);
        if (toMap[arry[i]]) {
            resultToReturn = true;
            // terminate the loop
            break;
        }

        toMap[arry[i]] = true;
    }

    if (resultToReturn) {
        console.log('Duplicate elements exist'
            );
        }
        else {
            console.log('Duplicates do not exist ');
            }
        }