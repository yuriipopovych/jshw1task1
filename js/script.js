
//////////1.1/////////


function converter(usd, grn) {
  var dollar = usd * 26;
  var grivna = grn / 26;
  if (usd > 0 || grn > 0) {
    return {dollar:dollar, grivna:grivna};
  }
}
console.log(converter(10,10));


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
var sum =0;
const arr = [1,4,2];
	for (i = 0; i < arr.length; i++){
		sum += arr[i]; 
	}
const result = sum / arr.length;
console.log(result);