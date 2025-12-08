//for cycle
function solve(input)
{
    let n = Number(input[0])
    for (let i = n - 1; i <= 0 ; i--){
        console.log(i);
    }
}
solve([3])
console.log(`--------------------`);

function solve1(input){
    let n = Number(input[0])
    for (let i = 1; i <= n; i += 3){
        console.log(i);
    }
}
solve1([7])
console.log(`--------------------`);

function test(input)
{
let num = input[0];
for (let i = 0;i < num.length;i++)
{
console.log(num[i]);
}
}
test([`hi`])
console.log(`-------------------`);

function Counting(input)
{
    let n = Number(input[0])
    for (let i = n - 1; i >= 1 ; i--){
        console.log(i);
    }
}
Counting([100])
console.log(`-----------------`)
function PositiveNumber(input){
  let n = Number(input[0])
    for (let i = n ; i >= 1 ; i--){
        console.log(i);
    }
}
PositiveNumber([2])
console.log(`--`)
PositiveNumber([3])
console.log(`--`)
PositiveNumber([5])
console.log(`---------------`)
function Solve(input){
     let n = Number(input[0])
    for (let i = 1; i <= n; i += 3){
        console.log(i);
    }
}
Solve([10])
console.log(`--`)
Solve([7])
console.log(`--`)
Solve([15])
console.log(`-----------------`)
function Steps(input){
let n = Number(input[0])
    for (let i = 0 ; i <= n; i += 2){
        console.log(Math.pow(2,i));
    }
}
Steps([4])
console.log(`-------------------`)
function Sum(input){
    
}
