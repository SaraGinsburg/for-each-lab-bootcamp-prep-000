function iterativeLog(arr){
  arr.forEach((element, index, arr) => {
  console.log(`${index}: ${element}`);
});
}

function iterate(callback){
  var arr = ["hi", "how", "are", "you?"]
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback)
  
}
