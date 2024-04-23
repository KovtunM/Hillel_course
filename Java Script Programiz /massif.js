
let arr = [1, 2, 3, 4, 5, 1000, 93068, 234541, 23454]

function foo (data)
{
    let summ = 0;
    for (let i = 0; i < data.length; i++)
    {
        summ += data[i];
    
        console.log(summ);
    }
    
    return summ / data.length;
}

console.log(foo(arr));