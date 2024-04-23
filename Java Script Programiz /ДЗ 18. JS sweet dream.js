
function extractNumbers(inputString) 
{
    const numbers = [];
    let currentNumber = '';
    let isNumber = false;
  
    for (let i = 0; i < inputString.length; i++) 
    {
      const char = inputString.charAt(i);
  
      if (!isNaN(char) && char !== ' ') 
      {
        currentNumber += char;
        isNumber = true;
      } 
      else if (isNumber) 
      {
        numbers.push(Number(currentNumber));
        currentNumber = '';
        isNumber = false;
      }
    }
  
    if (isNumber) 
    {
      numbers.push(Number(currentNumber));
    }
  
    return numbers;
  }
  
  let a = "00asdf0123 d6 lkj006m90";
  console.log(extractNumbers(a));
  