
// date 23.08.2023
// date 2023-08-23

function foo(data) 
{
    return data.split('.').reverse().join('-');
}

//foo = (data) => data.split('.').reverse().join('-'); // Та сама функція.

console.log(foo('23.08.2023'))
console.log(foo('23.10.2023'))
console.log(foo('14.08.2023'))