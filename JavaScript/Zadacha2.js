function Triangle1(input)
 {
 let a = Number (input[0])  
 let b = Number (input[1])    
 let c = Number (input[2])    
if(((a + b) > c)&& ((a + c) > b )&& ((b + c)> a))
{
 // console.log(`The triangle is real.`);
}
else
{
// console.log(`The triangle AINT triangling`);
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
}
Triangle1([5,5,5])
Triangle1([1,6,9])
Triangle1([1,3,1])