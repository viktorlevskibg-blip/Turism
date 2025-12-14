function Triangle1(input)
 {
 let a = Number (input[0])  
 let b = Number (input[1])    
 let c = Number (input[2])
if(((a + b) > c)&& ((a + c) > b )&& ((b + c)> a))
{
  //console.log(`The triangle is real.`);
}
else
{
 //console.log(`The triangle AINT triangling`);
}
if((a==b) && (b==c) && (a==c))
{
console.log(`The triangle is equilateral.`);
}
else if(a != b != c)
{
console.log(`The triangle is polyhedral.`);
}
else if(a==b !=c || b==c !=a  || a==c !=b) 
{
console.log(`The triangle is isosceles.`);
}
 let S = Number (input[2])
 let ha = Number (input[1])
 let hb = Number (input[2])
 let hc = Number (input[3])
 S = (a*ha/2,b*hb/2,c*hc/2)
console.log(`The area of the triangle is ${S}.`);
}

Triangle1([5,5,5,4,4,4])
Triangle1([1,6,9,7,2,3])
Triangle1([1,3,1,5,0,5])
console.log(`---------`);

function Month(input)
{
let monthNumber = Number(input[0])
let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]
if(monthNumber >= 0 && monthNumber <= 12)
{
console.log(`The month u selected is ${months[monthNumber - 1]}`)
}
else
{
console.log(`Error!`);
}
}
Month([1])
Month([13])
console.log(`----------------`);

function Finder(input)
{
let x = Number(input[0]);
if (x <= 0) {
    console.log('y = 2');
} else if (x > 0 && x < 1) {
    console.log(`y = ${1 + 2}`);
} else if (x >= 1 && x <= 2) {
    console.log('y = 3');
} else if (x > 2 && x < 3) {
    console.log(`y = ${5 - x}`);
} else if (x >= 3) {
    console.log('y = 2');
}
}
Finder([-1]);
Finder([2.5]);
Finder([1.5]);
console.log(`----------------`);
function AreaCalculator(shape, a, b) {
    switch (shape) {
        case "square": console.log(a*a); break;
        case "rectangle": console.log(a*b); break;
        case "circle": console.log(Math.PI*a*a); break;
        case "triangle": console.log((a*b)/2); break;
        default: console.log("Error!"); break;
    }
}
AreaCalculator(`square`, 5);
AreaCalculator(`rectangle`, 4, 6);
AreaCalculator(`circle`, 3);
AreaCalculator(`triangle`, 4, 5);
