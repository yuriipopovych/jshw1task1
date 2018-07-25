
//////////1.1/////////
function converter(usd, grn) {
  if (usd >0 || hrn >0)
    console.log(usd * 26)
    console.log(grn / 26)
}
converter(10, 100);


//////////1.2//////////
var array = [1,23,-5,11];
console.log(Math.min(...array));
console.log(Math.max(...array));


////////////1.3////////////
var sum =0;
const arr = [1,4,2];
	for (i = 0; i < arr.length; i++){
		sum += arr[i]; 
	}
const result = sum / arr.length;
console.log(result);