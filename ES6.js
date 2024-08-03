// Sumar todos los elementos
// console.log([5,3,12,8,9,10].reduce((v,v1) => v+v1));

// Sumar los elementos de un múltiplo n
// console.log([5,3,12,8,9,10].filter((v) => v % 2 == 0).reduce((v, v1)=> v + v1));

// Filtrar los numeros primos de un arreglo
console.log([27, 7, 97, 59, 29, 38, 70, 71].filter((v) => {
    let acum = 0;
    for (let i = 2; i < v - 1; i++) {
      if (v % i === 0) {
        acum++;
      }
      else {
        acum += 0;
      }
    }
    if (acum >= 1) {
      return false
    }
    else {
      return true
    }
  }));