// ⚓️ [Exercises 13 (Auto)] Target Terdekat---------------------------------------------
function targetTerdekat(arr) {
    var letakO = arr.indexOf('o')
  
    if (arr.slice(0, letakO).indexOf('x') != -1 ) {
      return letakO- arr.lastIndexOf('x')
    } else if (arr.slice(letakO).indexOf('x') != -1) {
      return arr.indexOf('x') - letakO
    } else {
      return 0
      }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2







  