
let str_1 = "XIX";
let str_2 = "DLV";
let str_3 = "MDXLVII";
let str_4 = "MMXXIII";
let str_5 = "MMCMDCDXCXLXIXIV";

function foo(data)
{
    let newData = 0;

    for (let i in data)
    {
        let char = data[i];

        if (char === "I")
        {
            newData += 1;
        }
        else if (char === "V")
        {
            newData += 5;
        }
        else if (char === "X")
        {
            newData += 10;
        }
        else if (char === "L")
        {
            newData += 50;
        }
        else if (char === "C")
        {
            newData += 100;
        }
        else if (char === "D")
        {
            newData += 500;
        }
        else if (char === "M")
        {
            newData += 1000;
        }
        if (i > 0)
        {
            if ((char === "M" || char === "D") && data[i - 1] === "C")
            {
                newData -= 200;
            }
            if ((char === "C" || char === "L") && data[i - 1] === "X")
            {
                newData -= 20;
            }
            if ((char === "X" || char === "V") && data[i - 1] === "I")
            {
                newData -= 2;
            }
        }
    }

    return newData;
}

console.log(foo(str_1))
console.log(foo(str_2))
console.log(foo(str_3))
console.log(foo(str_4))
console.log(foo(str_5))
console.log(foo("MDDIX"))