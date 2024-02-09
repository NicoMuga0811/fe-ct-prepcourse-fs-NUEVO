function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  var i = 1
  var nuevoNum = num

  do{
    nuevoNum = nuevoNum + 5
    i++
  }while(i < 9)

  return nuevoNum
}

console.log(doWhile(2))

module.exports = doWhile;