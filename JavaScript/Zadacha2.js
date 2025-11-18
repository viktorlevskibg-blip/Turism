function Check(input){
let numberA = Number(input[0]);
if(numberA % 2 == 0)
{
console.log(`The number ${numberA} is even`)
} 
else
{
  console.log(`The number ${numberA} is NOT even`)
}
}
Check([`4`])
Check([5])
console.log(`/////////////////////`)
function Math(input)
 {
let number1 = Number(input[0])
   if((number1 % 5==0 && number1 % 9 == 0))
{
console.log(`The number ${number1} can be divided by 5 and 9.`)
}
else
{
console.log(`The number ${number1} cant be divided by 5 and 9.`)
} 
}
Math([`90`])
Math(['60'])
console.log(`/////////////////////`)
function Calculator(input)
{
     let a = Number(input[0])
     let b = Number(input[1])
     let result=(a>b)? `${a} is greater than ${b}!`:`${b} is greater than ${a}!`;
     console.log(result)
    
}
Calculator([`4`,`2`])
Calculator([`8`,`1`])
console.log(`/////////////////////`)
function triangle(input) {
    let operator = input[1];   
    let a = Number(input[0]);  
    let b = Number(input[2]);  
    let Final;

    switch (operator) {
        case '+': Final = a + b; break;
        case '-': Final = a - b; break;
        case '*': Final = a * b; break;
        case '%': Final = a % b; break;
        case '/': Final = a / b; break;
    }

    console.log(`The result is ${Final}.`);
}

triangle([90, "-", 21]);   
triangle([55, "+", 15]);   
triangle([7, "*", 15]);    
triangle([100, "%", 10]);  
triangle([100, "/", 10]);
console.log(`////////////////////////`)
function Triangle1(input)
 {
 let a = Number (input[0])  
  let b = Number (input[1])    
 let c = Number (input[2])    
if(((a + b) > c)&& ((a + c) > b )&& ((b + c)> a))
{
    console.log(`The triangle is real.`);
}
else
{
    console.log(`The triangle AINT triangling`);
}
}
Triangle1([34,32,23])
Triangle1([34,32,80])






