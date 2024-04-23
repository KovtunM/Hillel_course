
let arr_1 = [1, 2, 3, 0, 13, -145, 357]
let arr_2 = [3, -3, 4, 5, 6, 69, -78, -0]


function foo(data)
{
    let summ = 0;
    data = data.join("");
    for (let element of data)
    {
        if (element != "-")
        {
            summ += Number(element);
        }
    }
    return summ;
}
 

console.log(foo(arr_1))
console.log(foo(arr_2))