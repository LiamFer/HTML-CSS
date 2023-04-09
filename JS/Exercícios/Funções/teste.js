var list = [2, 5, 7, 8, 9, 12]

var maiormath = Math.max.apply(null,list)
console.log(maiormath)

var maior = list[0]

for (var i in list){
    if (list[i] > maior){
    maior = list[i]
}
}

console.log(maior)
