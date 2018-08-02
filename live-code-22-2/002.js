function printBranch(branches) {
  var month = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec']
  // | jan | Branch-1 IN: 1000 | OUT:500 |Branch-2 IN: 1000 | OUT:700 |Branch-3 IN: 2000 | OUT:500 |
  for (var j =0 ; j<month.length;j++){
    var tampung = '| ' + month[j] + ' '
    for (var i = 0; i<branches.length;i++){
      tampung += `| Branch-${i+1} IN: ${branches[i][0][j]} | OUT: ${branches[i][1][j]} `
    }
    console.log(tampung)
  }
  
  return tampung
}

//TEST CASE 1
var data1 = [
  [
    [1000, 1500, 2000, 1500, 2500, 3000, 3000, 2500, 1000, 2000, 1000, 4000], //Income
    [500, 700, 700, 700, 1000, 1300, 1300, 1000, 500, 1000, 500, 2200] //Outcome
  ],
  [
    [1000, 2500, 2000, 2000, 1500, 2000, 1000, 1000, 2000, 2500, 2000, 3000], //Income
    [700, 1000, 700, 1000, 700, 1000, 500, 500, 500, 1000, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1000, 1000, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1000, 1000, 1000, 1500, 1000, 1500, 1000, 2200] //Outcome
  ]
]

console.log(printBranch(data1));

