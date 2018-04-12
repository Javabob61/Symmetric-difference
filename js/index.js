function sym(args) {
  
  args = Array.prototype.slice.call(arguments); // Breaks single arg into multiple arrays.
  var ansArr = [];
   
  for (var a in args) {    // removes repeated elements in indivual argument arrays.
    args[a] = uniq(args[a]);  // ** Valid from ES6 Javascript.  
  } 
   
  for (var b in args) {    // uses compareArrays to check for duplicate elements
    ansArr = compareArrays(ansArr, args[b]);  // then stores the result in ansArr.  
  }  
  
  function compareArrays(arg1, arg2) {
    
    var loopArray = [];

      for (var i in arg2) { // loop through each element in arg2 to see if it's in arg1.
        if (!arg1.includes(arg2[i])){ // If not, add it to the answer array.
          loopArray.push(arg2[i]);
          //console.log(ansArr);
        }
      }
    
      for (var j in arg1) { // loops through each element in arg1 to see if its in arg2.
        if (!arg2.includes(arg1[j])){ // If not, add it to the the answer array.
              loopArray.push(arg1[j]);
              //console.log(ansArr);          
        }
      }
    
    return loopArray;
  }
  
  function uniq(a) {
   return Array.from(new Set(a));  // Available in JavaScript ES6.
  }
 
  console.log(ansArr);
  return ansArr;
  
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);