var mean, median, mode, sum;
var numArray = [];


//setup
process.argv.forEach(function(val, index, array) {
  if(index >= 2) {
    numArray.push(Number(val));  
  }
});

numArray.sort(function(a, b) {
  return a-b;
});

sum = numArray.reduce(function(a,b){
  return a + b;
});

//mean
mean = sum / numArray.length;
console.log("The mean is: " + mean);

//median
numArray.length % 2 !== 0 ? j = (numArray.length -1)/2 : j = numArray.length/2;
median = numArray[j];
console.log("The median is: " + median);

//Mode
var counts = [];

for (var i = 0; i < numArray.length; i++) {
  counts[numArray[i]] = (counts[numArray[i]] ? counts[numArray[i]] : 0) + 1;
}

var mode = 0;
var modeNum = 0;

counts.forEach(function(value, index){
  if (value >= modeNum) {
    mode = index;
    modeNum = value;
  }
});

console.log("The mode is: " + mode);