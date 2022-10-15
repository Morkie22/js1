//Mathematical Shapes a//
function findDiagonal(s)
{
    return Math.sqrt(2) * s;
    const findDiagonal = 9
}
 
//console.log(findDiagonal(9))//
//Mathematical Shapes b//

/*function areaOfTriangle ()
{
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;
    const s = (side1 + side2 + side3 / 2)
    const areaOfTriangle = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
}*/


/*function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2)); */

/* function max(a, b) {
    if (a > b) {
        return a;
    }
console.log(max(10,7)) */

function isEven() {
    const n = 5
    return n % 2 == 0;
 }
 
 function isOdd() {
    const n = 8
    return Math.abs(n % 2) == 1;
 }
console.log(isEven(6))
//console.log(isOdd(8))//