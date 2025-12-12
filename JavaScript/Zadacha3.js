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
 let a = Number(input[0])
 let b = Number(input[1])
 let sum = 0
     for (let i = a; i <= b; i++){
        if(i % 9 == 0){
            sum += i
    }
}
     console.log(`the sum: ${sum}`)
    for (let i = a; i <= b; i++){
        if(i % 9 == 0)
        console.log(i)
 }
 }
Sum([100,200])
console.log(`----------------`)
function Sumirane(input)
{
 let a = Number(input[0])
 let b = Number(input[1])
  for (let i = a; i <= b; i++){
     if(i % 10 == 7){
      console.log(i)
    }
}
}
Sumirane([1,1000])
console.log(`----------------`)
function Argument1(input)
{
 let num = Number(input[0])
for (let i = 1; i < 11; i++){
      console.log(`${i} * ${num} = ${num * i}`)
    }
}
Argument1([5])
console.log(`----------------`)
function Job(input)
{
let tabs = Number(input[0])
let zaplata = Number(input[1])
let currentzaplata = zaplata
let facebookGloba = 150
let instagramGloba = 100
let redditGloba = 50
let string = input[6]

if (string == `Instagram`);
{
    tabs = 3
   currentzaplata -= instagramGloba
   console.log(`Instagram -> имаш ${tabs} таба, глоба 100лв (заплата ${currentzaplata})`) 
}
if (string == `Facebook`);
{
    tabs = 4
   currentzaplata -= facebookGloba 
   console.log(`Facebook -> имаш ${tabs} таба,глоба 150лв (заплата ${currentzaplata})`)
}
if (string == `Dev.bg`);
{ 
    tabs = 0
   console.log(`Dev.bg -> имаш ${tabs} таба,глоба нема (заплата ${currentzaplata})`)
}
if (string == `Reddit`);
{
    tabs = 2
   currentzaplata -= redditGloba
   console.log(`Reddit -> имаш ${tabs} таба, глоба 50лв (заплата ${currentzaplata})`)
}
}
Job([0,750,100,150,50,"Instagram","Facebook","Dev.bg","Reddit"])
console.log(`----------------------`)

