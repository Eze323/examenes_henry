/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/


function sumaTodosPrimos(array) {
  
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:
  let sumaPrimos=0;
  for(var i=0;i<array.length;i++){
    if(esPrimo(array[i])){
      
      sumaPrimos+=array[i];
    }
  }
  return sumaPrimos;
}

function esPrimo(numero) {
  if(numero===0 || numero===1 || numero===4){
    return false;
  }
  else{
    for(i=2;i<numero/2;i++){
      if(numero%i===0){
        return false;
      }
    }
    return true;
  }
}

// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos