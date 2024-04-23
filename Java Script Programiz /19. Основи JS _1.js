
let arr_1 = [1, 2, 3]
let arr_2 = [3, -3, 4, 5, 6]


function foo(data)
{
    let newData = [];
    for (let element in data)
    {
        for (let iter = 0; iter < Math.abs(element); iter ++)
        {
            newData.push(Number(element));
        }
    }
    return newData;
}


console.log(foo(arr_1))
console.log(foo(arr_2))