var luasKotak = 10

for (var i=0;i<luasKotak; i++) {
  var result = ''
  for (var j=0;j<luasKotak; j++) {
    if (i == 0 || i == luasKotak-1) {
      result += '# '
    } else if (j == 0 || j == luasKotak-1 ) {
      result += '# '
    }
    else {
      result += '  '
    }
  }
  console.log(result)
}


//lebih sederhana
var luasKotak = 10

for (var i=0;i<luasKotak; i++) {
  var result = ''
  for (var j=0;j<luasKotak; j++) {
    if ( j == 0 || j==luasKotak-1 || i == 0 || i == luasKotak-1) {
      result += '# '
    }
    else {
      result += '  '
    }
  }
  console.log(result)
}

//kotakbolong dengan x
var segitigaBolong = 20

for (var i = 0; i < segitigaBolong; i++ ) {
  var result = ''
  for (var j = segitigaBolong-1; j >= 0; j--){
    if ( j == i || j == 0 || i == segitigaBolong-1 || i == 0 || j == segitigaBolong-1 || j == segitigaBolong-1-i) {
      result += '# '
    }
    else {
      result += '  '
    }
  }
  console.log(result)
}

//diamon
var luasKotak = 10

for (var i=0;i<luasKotak; i++) {
  var result = ''
  for (var j=0;j<luasKotak; j++) {
    if ( j == luasKotak/2-1-i || j == luasKotak/2+i || i == luasKotak/2+j || i == luasKotak*2-luasKotak/2-1-j) {
      result += '# '
    }
    else {
      result += '  '
    }
  }
  console.log(result)
}

//nepal
var luasKotak = 5

for (var i=0;i<luasKotak*2; i++) {
  var result = ''
  for (var j=luasKotak;j>0; j--) {
    if (i == luasKotak-j || j==luasKotak || i == luasKotak*2-j || i == luasKotak-1 || i==luasKotak*2-1 ) {
      result += '# '
    }
    else {
      result += '  '
    }
    
  }
  console.log(result)
}