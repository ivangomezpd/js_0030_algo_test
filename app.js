// 1 funcion para devolver los numeros pares entre a y b
export function numerosPares(a, b) {
  let resultado = ""
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      resultado += i + ";"
    }
  }
}
// 2 funcion para hacer la tabla de multiplicar de un numero
export function tablaMultiplicar(numero) {
  let resultado = ""
  for (let i = 0; i <= 10; i++) {
    resultado += numero + "*" + i + "=" + numero * i + ";"
  }
  return resultado
}
// 3 funcion para devolver el mayor de tres numeros
export function mayorDeTresNumeros(a, b, c) {
  return 0
}
// 4 funcion para devolver la suma de los numero entre a y b
export function sumaEntreNumeros(a, b) {
  return 0
}
// 5 funcion para devolver el numero de numeros pares entre a y b
export function numerosParesCount(a, b) {
  return 0
}

// 6 funcion para calcular la media de las notas pasadas como parametros.
export function mediaDeNotas(a, b, c, d, e, f, g, h, i, j) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
  return 0
}

// 7 ver las combinacion de 3 numeros (del 1 al 9) que sumen n
export function combinacionesDeTresNumeros(a, b, c, n) {
  return 0
}

// 8 ver las combinaciones de 4 numeros (del 1 al 9) que sumen n
export function combinacionesDeCuatroNumeros(a, b, c, d, n) {
  return 0
}

// 9 funcion que compruve si un numero es primo.
export function esPrimo(n) {
  return 0
}
// 10 funcion que devuelva el factorial de un numero
export function factorial(n) {
  return 0
}




