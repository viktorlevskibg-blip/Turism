function FirstMasiv(input){
    let arr = [];
for(let i = 0; i < input.length;i++)
{
      let Everyvalue = Number(input[i]);
      arr.push(Everyvalue)
}
console.log(arr)
let firstNum = arr[0]
let lastNum = arr[arr.length - 1]
console.log(`the sum of the first and last is ${firstNum + lastNum}.`)
}
FirstMasiv([5,2,4,3,1])
console.log(`--------------------------`)
function SecondMasiv(input){
let first = Number(input[0])
let second = Number(input[input.length - 1]);
console.log(`the sum of the First and Second is ${first + second}`)
}
SecondMasiv([1,2,3,4,5,6,7,8])
console.log(`--------------------------`)
function ThirdMasiv(input){
 let arr = [];
for(let i = 0; i < input.length;i++)
{
      let Everyvalue = Number(input[i]);
      arr.push(Everyvalue)
      if(Everyvalue % 2 === 0){
         console.log(Everyvalue)
      }

     }
}
ThirdMasiv([1,2,3,4,5,6,7,8,9,10,11,12])
console.log(`--------------------------`)
function Zadacha1(FirstArr,SecondArr,ThirdArr){
    let arrayAll = []
    let arrayAll1 = []
    let arrayAll2 = []
for(let i = 0;i < FirstArr.length;i++ ){
let valueOne = Number(FirstArr[i])
arrayAll.push(valueOne)
}
for(let j = 0;j < SecondArr.length;j++){
    let valueTwo = Number(SecondArr[j])
    arrayAll1.push(valueTwo)
}
for(let k = 0;k < ThirdArr.length;k++){
   let valueThree = Number(ThirdArr[k]) 
arrayAll2.push(valueThree)
}
let lastArray = arrayAll.concat(arrayAll1,arrayAll2)
console.log(lastArray)
}
Zadacha1([2,4],[5,6],[8,9])
console.log(`--------------------------`)
function DrugiqNachin(arrOne,arrSecond,arrThree){
let arrayFour = [];
arrayFour = arrOne.concat(arrSecond,arrThree)
console.log(arrayFour)
}
DrugiqNachin([1,2],[3,4],[5,6])
console.log(`--------------------------`)
function Izvlichane(input){
    let array = []
for(let i = 0;i < input.length;i++){
    let everyValue = Number(input[i])
    array.push(everyValue)
}
array.pop();
array.shift();
array.splice(5,1)
console.log(array)
}
Izvlichane([20,30,40,10,17,22,33,40,11,58,69])