function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if(a < 0 || b < 0){
    return 0
  }

  var producto = a
  for(i = a + 1; i <= b; i++){
      producto = producto * i
  }
  return producto
}

module.exports = productoEntreNúmeros;