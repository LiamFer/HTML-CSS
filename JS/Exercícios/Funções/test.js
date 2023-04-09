var list = [2, 4, 6, 7, 8];
var number = 6
var validation = 0
for (var i in list) {
  if (number == list[i]) {
    console.log("o numero já ta na lista!");
    break;
  } else {
    validation++
  }
}

if (validation == list.length){
    list.push(number)
}

console.log(list)
