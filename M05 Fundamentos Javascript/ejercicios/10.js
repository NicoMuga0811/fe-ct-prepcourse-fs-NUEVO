function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  if(!(fecha instanceof Date) || isNaN(fecha.getTime())){
    return false
  }
  
  var año = fecha.getFullYear()
  var mes = fecha.getMonth() + 1
  var dia = fecha.getDate()

  if(año < 0 || mes < 0 || mes > 12 || dia < 1){
    return false
  }

  if(mes === 2){
    if((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0){
      if(dia > 29){
        return false
      }
    } else{
      if (dia > 28){
        return false
      }
    }
  }else{
    if(( mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30){
      return false
    }
  }
  return true
}

module.exports = esFechaValida;