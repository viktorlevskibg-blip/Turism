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
function Materials(input) {
  
    let chemNum = Number(input[0]);    
    let markerNum = Number(input[1]);  
    let cleanerLitres = Number(input[2]); 
    let discountPercent = Number(input[3]); 

    
    let chemPrice = 5.8;
    let markerPrice = 7.2;
    let cleanerPrice = 1.2;

   
    let chemTotal = chemNum * chemPrice;
    let markerTotal = markerNum * markerPrice;
    let cleanerTotal = cleanerLitres * cleanerPrice;

  
    let grossTotal = chemTotal + markerTotal + cleanerTotal;
    
   
    let finalTotal = grossTotal - (grossTotal * discountPercent / 100);

    console.log(finalTotal.toFixed(1));
}
Materials([2, 3, 4, 25]); 
