// [Exercises 5 (Auto)] Palindrome-----------------------------------------------
function palindrome(kata) {
    var result = ''
    for( var i=kata.length-1; i>=0; i--){
      result += kata[i]
    }
    return result == kata
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

// [Exercises 6 (Auto)] Palindrome Angka-----------------------------------------------
function angkaPalindrome(num) {
  num+=1
  var jadiString = num.toString()  
  function balikAngka(num){   
    var result = ''
    for (var i=jadiString.length-1; i>=0; i--){
      result += jadiString[i]
    }
    return result
  }

  while ( jadiString != balikAngka(num) ) {
    num+=1
    jadiString = num.toString() 
  }
  
  return num
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(101)); // 1001


// [Exercises 7 (Auto)] Hitung Jumlah Kata-----------------------------------------------
function hitungJumlahKata(kalimat) {
    return kalimat.split(' ').length
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

// [Exercises 8 (Auto)] Pasangan Angka Terbesar-----------------------------------------------
function pasanganTerbesar(num) {
  var numStrArr = (''+num).split('')
  var pasanganNum = []
  var result = 0
  for (var i=0;i<numStrArr.length-1;i++) {   
    pasanganNum.push(Number(numStrArr[i]+numStrArr[i+1]))
    if (result < pasanganNum[i]) {
      result = pasanganNum[i]
    }
  }
  return result
}

//atau
function pasanganTerbesar(num) {
  var numStr = num.toString()
  var tampung = 0
  for(var i = 0; i<numStr.length-1; i++){
    numStr[i]+numStr[i+1]
    if(Number(numStr[i]+numStr[i+1]) > tampung) {
      tampung = Number(numStr[i]+numStr[i+1])
    }
  }

  return tampung
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99