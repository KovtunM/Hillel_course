
function foo(first_line, second_line)

{
    for (let el of first_line)
        if (!Number.isInteger(el))
            return "ERROR"

    for (let el of second_line)
        if (!Number.isInteger(el))
            return "ERROR"

            
    first_line.sort((a, b) => a - b);
    second_line.sort((a, b) => a - b);
    
    if (first_line[0] === second_line[1])
    {
        return first_line[0];
    }
c
    if (first_line[1] === second_line[0])
    {
        return first_line[1];
    }



    if (first_line[0] < second_line[0] && first_line[1] < second_line[0])
    {
        if (first_line[0] < second_line[1] && first_line[1] < second_line[1])
        {
            return "No solutions";
        }
    }
    if (first_line[0] > second_line[0] && first_line[1] > second_line[0])
    {
        if (first_line[0] > second_line[1] && first_line[1] > second_line[1])
        {
            return "No solutions";
        }
    }



    if (first_line[0] > second_line[0] && first_line[1] > second_line[0])
    {
        if(first_line[0] < second_line[1] && first_line[1] < second_line[1])
        {
            return first_line;
        }
    }
    if (second_line[0] > first_line[0] && second_line[1] > first_line[0])
    {
        if (second_line[0] < first_line[1] && second_line[1] < first_line[1])
        {
            return second_line;
        }
    }



    if (first_line[0] < second_line[0] && first_line[0] < second_line[1])
    {
        if (first_line[1] > second_line[0] && first_line[1] < second_line[1])
        {
            return [second_line[0], first_line[1]];
        }
    }
    if (second_line[0] < first_line[0] && second_line[0] < first_line[1])
    {
        if (second_line[1] > first_line[0] && second_line[1] < first_line[1])
        {
            return [first_line[0], second_line[1]];
        }
    }
}

 

console.log(foo([0, 4], [2, 5]))
console.log(foo([0, 4], [4, 8],))
console.log(foo([-3, 4], [5, 8],))
console.log(foo([0, 4], [-4, 10],))
console.log(foo([0, undefined], [2, 5],))
console.log(foo([0, 8], [2, 5],))
console.log(foo([4, 0], [5, 2]))
console.log(foo([4, 0], [8, 4],))
console.log(foo([0, 0], [1, -1],))
