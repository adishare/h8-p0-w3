/**
//algoritma 

1. Membuat nested fuction balikArr yang akan menerima 1 parameter kata (string) yang didapat dari array
  1.a. buat variable penampung tampungKata
  1.b. looping sebanyak jumlah karakter dalam kata dimulai dari akhir
  1.c. tambahkan tampungKata dengan karakter yg didapat dr looping
  1.d. return tampungKata
2. Membuat looping yang akan mengecek isi array dari kiri ke kanan
  2.a. jika iterasi genap
      2.a.a panggil fungsi balikArr dengan parameter isi dari array dan tukar isi array dengan return fungsi balikArr
3. return array

*/



function reverseEven (arr) {
  
  function balikArr (kata) {
    var tampungKata = ''
    for (var j = kata.length-1; j>=0; j--){
      tampungKata += kata[j]
    }
    return tampungKata
  }
  
  
  for(var i = 0 ; i<arr.length; i++) {
    if(i%2 === 0) {
      arr.splice(i,1, balikArr(arr[i]))
    } 
  }
  return arr
}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]

console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]

console.log(reverseEven([]));
// []