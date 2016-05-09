// console.log(process.argv);

var inputs = process.argv;

var length = inputs.length;

var sumInputs = 0;

for(var i = 2; i < length; i++){
  sumInputs += +inputs[i];
}

console.log(sumInputs);