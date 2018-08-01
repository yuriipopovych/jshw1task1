
//////////1.1/////////


function converter(usd, grn) {
   if (usd >0 && grn > 0) {
     return {usd: usd *26, grn: grn / 26}
   } else if ( usd > 0) {
     return {usd: usd * 26}
   }else if ( grn > 0) {
     return {usd: grn / 26}
   } else  {
     return {}
   }
 }
console.log(converter(10, 10));

//////////1.2//////////
// var array = [1,23,-5,11];
// console.log(Math.min(...array));
// console.log(Math.max(...array));

var array = [1,23,-5,11];
function minMax (array) {
   var min = (Math.min(...array));
   var max = (Math.max(...array));
  return {min:min, max:max};
}
console.log(minMax(array));


////////////1.3////////////
function averageNumber(ourArray) {
  var arrSum = ourArray.reduce(function(firstNumber, nextNumber) {
    return firstNumber + nextNumber;
  });
  return arrSum / ourArray.length;
}
console.log(averageNumber([1,4,2]));