function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var resultado = ''

  for( i = texto.length -1; i >= 0; i--){
    resultado = resultado + texto[i]
  }

  return resultado
}

module.exports = invertirTexto;