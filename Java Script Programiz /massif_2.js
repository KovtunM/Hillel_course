
let arr = [1, 2, 3, 4, 5, 1000, 93068, 234541, 23454]

let arr_2 = [1, 1]

let arr_3 = [0, 1, 0, 3, 2, 3, 4, 10, 10]

let arr_4 = undefined


function foo (data)
{
    if (Array.isArray(data))
    {
        if (!data.length % 2)
        {
            return "Array is not valid!!!"
        }
    }
    else
    {
        return "Not good!!!"
    }
    for (let element of data)
    {
        let bigger = 0
        let smaller = 0
        for (let innerElement of data)
        {
            if (element > innerElement)
            {
                bigger ++;
            }
            else if (element < innerElement)
            {
                smaller ++;
            }
        }
        if (bigger == smaller)
        {
            return element
        }
    }
    return "ERROR!!!"
}

console.log(foo(arr));
console.log(foo(arr_2));
console.log(foo(arr_3));
console.log(foo(arr_4));