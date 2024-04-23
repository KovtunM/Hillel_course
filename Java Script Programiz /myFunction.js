
let myFunction = function(inputValue) {
    if (inputValue % 3 == 0 && inputValue % 5 == 0) {
        return (inputValue + ' Is multiple of 3 and 5')
    } else if (inputValue % 5 == 0) {
        return (inputValue + ' Is multiple of 5')
    } else if (inputValue % 3 == 0 ) {
        return (inputValue + ' Is multiple of 3')
    } else {
        return ('Error on Value ' + inputValue)
    }
 }
 
 //let b = myFunction(30)
 console.log(myFunction(30)) // 3, 5
 console.log(myFunction(4)) // error
 console.log(myFunction(5)) // 5
 console.log(myFunction(9)) // 3
 console.log(myFunction(45)) // 3, 5
 console.log(myFunction(0)) // 3, 5
 
 console.log('ABBA'.length)
 let asf = 'ABBC'
 
 let array = [2,'13234', undefined, 13]