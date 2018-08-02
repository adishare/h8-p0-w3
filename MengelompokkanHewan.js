// ⚓️ [Exercises 15] Mengelompokkan Hewan---------------------------------------------


//coba pake var alpabet =a sd z untuk sorting

function groupAnimals(animals) {
  var alpabet = 'abcdefghijklmnopqrstuvwxyz'
  var result= []
  for(var i=0;i<alpabet.length;i++){
    for(var j=0; j<animals.length;j++){
      if(animals[j][0] == alpabet[i]){
        result.push(animals[j])
      }
    }
  }
  
  var  arranged = [[]]
  var index = 0
  arranged[index].push(result[0])
  for(var k=1;k<result.length;k++){
    if(result[k][0] == arranged[index][0][0]){
      arranged[index].push(result[k])
    } else {
      index++
      arranged[index] = [result[k]]
    }
  }     
    return arranged
}
    
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))
  