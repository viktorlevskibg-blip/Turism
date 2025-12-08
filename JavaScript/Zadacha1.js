function AreaTriangle(input)
{
let a = Number(input[0]);
let h = Number(input[1]);
let c = 0.5*a*h;
console.log(`The area of the triangle is  ${c}`);
}
AreaTriangle(["2","5"])
function Converter(input)
{
let BGN = Number(input[0]);
let EURO = BGN*0.51;
console.log(`Your money in EURO is ${EURO}€`)
}
Converter([5])
function Materials(input){
    
let penNum = Number(input[0])
let Pencil = 5.80;
let finalPenSum = Pencil*penNum;

let markerNum = Number(input[1]);
let Marker = 7.20;
let finalMarkNum = Marker*markerNum;

let cleanerNum = Number(input[2]);
let Cleaner = 1.20;
let finalCleanNum = Cleaner*cleanerNum;

let discount = Number(input[3])

let Total = finalPenSum + finalMarkNum + finalCleanNum;
let TotalForNow = Total -((Total * discount)/100);
console.log(`The whole amount to pay for the materials is ${Total}`);
}
Materials()