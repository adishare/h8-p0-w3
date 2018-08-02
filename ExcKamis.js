// ⚓️ [Exercises 9 (Auto)] Cari Mean---------------------------------------------------
function cariMean(arr) {  
    var result = 0
    for(var i=0;i<arr.length;i++){
      result += arr[i]
    }
    return Math.round(result/arr.length)
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7


// ⚓️ [Exercises 10 (Auto)] Perkalian Unik---------------------------------------------------
function perkalianUnik(arr) {
    var result = 1
    
    for(var i=0;i<arr.length;i++) {
      result *= arr[i]
    }
  
    for(var i=0;i<arr.length;i++) {
      arr.splice(i,1, result/arr[i])
    }  
    
    return arr
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


// ⚓️ [Exercises 11 (Auto)] Deret Aritmatika---------------------------------------------------

function tentukanDeretAritmatika(arr) {
  var result = 0; 
  for (var i=0; i<arr.length-2; i++ ){ // for-nya dibatesin jadi kurang 2 indeks, karena kondisi if i+1 i+2 
        if ((arr[i+1]-arr[i]) === (arr[i+2]-arr[i+1])){
          result = true
      } else {
        result=false;  
    } 
  }
  return result;
}

//atau
function tentukanDeretAritmatika(arr) {
  var bagi = arr[1]-arr[0]; 
  var tampung = true
  for (var i=2; i<arr.length;i++){
    tampung = arr[i]-arr[i-1];  
    if(tampung!=bagi) { 
      return tampung = false; //ketika deret berbeda langsung di return false
    } else {
      tampung = true
    }
  }
  return tampung
}

//improve
function tentukanDeretAritmatika(arr) {
  var awal = arr[1]-arr[0]

  for(var i = 2; i<arr.length-1; i++) {
    if(arr[i]-arr[i-1] != awal) {
      return false
    }
  }
  return true
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false




// ⚓️ [Exercises 12 (Auto)] Deret Geometri---------------------------------------------------
function tentukanDeretGeometri(arr) {
  var bagi = arr[1]/arr[0]; 
  var tampung = true
  for (var i=2; i<arr.length;i++){
    tampung = arr[i]/arr[i-1];  
    if(tampung!=bagi) { 
      return tampung = false; //ketika deret berbeda langsung di return false
    } else {
      tampung = true
    }
  }
  return tampung
}

//improve

function tentukanDeretGeometri(arr) {
  var perkalianAwal = arr[1]/arr[0]
  for( var i = 2; i<arr.length; i++){
    if(arr[i]/arr[i-1] != perkalianAwal){
      return false
    }
  }
  return true 
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 4, 8, 16, 54])); // false