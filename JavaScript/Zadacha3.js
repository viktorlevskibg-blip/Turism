function Month(input)
{
let January = Number(input[1])
let February = Number(input[2])
let March = Number(input[3])
let April = Number(input[4])
let May = Number(input[5])
let June = Number(input[6])
let July = Number(input[7])
let August = Number(input[8])
let September = Number(input[9])
let October = Number(input[10])
let November = Number(input[11])
let December = Number(input[12])
let monthNumber = Number(input[13])
if(monthNumber != 1,2,3,4,5,6,7,8,9,10,11,12)
{
console.log(`The month u selected is ${monthNumber}`)
}
else
{
console.log(`Error!`);
}
}
Month([])
