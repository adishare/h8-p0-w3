// ⚓️ [Exercises 15] Mengelompokkan Hewan---------------------------------------------

function groupAnimals(animals) {
    animals.sort(function(a,b) { return b<a})
    var arrangedAnimals = [[]]
    var index = 0
  
    arrangedAnimals[index].push(animals[0])
    for (var i=1;i<animals.length;i++) {
      if(animals[i][0] == arrangedAnimals[index][0][0]) {
        arrangedAnimals[index].push(animals[i])
      }
      else{
        index += 1
        arrangedAnimals[index] = [animals[i]]
      }
    }
    return arrangedAnimals
  }
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))