
function removeDuplicates(arr) 
{
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) 
    {
        if (uniqueArray.indexOf(arr[i]) === -1) 
        {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

var inputArray1 = [1, 2, 3, 2, 3];
var inputArray2 = [4, 4, 4, 4, 4];

var resultArray1 = removeDuplicates(inputArray1);
var resultArray2 = removeDuplicates(inputArray2);

console.log(resultArray1); // Виведе: [1, 2, 3]
console.log(resultArray2); // Виведе: [4]
