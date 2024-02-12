function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var cadenaLimpia = string.replace(/\s/g, '').toLowerCase()
  var strInvertida = ''

  for( var i = cadenaLimpia.length -1; i >= 0; i--){
    strInvertida = strInvertida + cadenaLimpia[i]
  }

  var strInvertidaLimpia = strInvertida.replace(/\s/g, '').toLowerCase()


  return cadenaLimpia === strInvertidaLimpia
}

module.exports = esPalindromo;
