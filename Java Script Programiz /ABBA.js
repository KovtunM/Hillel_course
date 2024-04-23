
let str_1 = "ABBA" // -7
let str_2 = "ABBC" // 0
let str_3 = "AB BA" // 2
let str_4 = "tglffldfp" // 0

function foo(data)
{
    for (let a of data)
    {
        let counter = 0;
        for (let b of data)
        {
            if (a === b) counter++;
        }
        if (counter === 1) return data.indexOf(a);
    }
    return -1;
}


console.log(foo(str_1))
console.log(foo(str_2))
console.log(foo(str_3))
console.log(foo(str_4))