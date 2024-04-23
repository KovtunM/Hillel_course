
function foo(data)
{
    if (Number(data) < 50 || !Number.isInteger(data))
        return "Not good"

    let num = 0
    while (data >= 50)
    {
        num ++;
        data /= 2;
    }
    return num
}

console.log(foo(123))
console.log(foo(65))
console.log(foo(4568))
console.log(foo(-4))
console.log(foo(undefined))
console.log(foo([]))
console.log(foo("undefined"))