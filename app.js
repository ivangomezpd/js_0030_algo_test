// 1. Función para devolver los números pares entre a y b
export function numerosPares(a, b) {
  let resultado = "";
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      resultado += i + ";";
    }
  }
  return resultado;
}

// 2. Función para hacer la tabla de multiplicar de un número
export function tablaMultiplicar(numero) {
  let resultado = "";
  for (let i = 0; i <= 10; i++) {
    resultado += `${numero} * ${i} = ${numero * i}; `;
  }
  return resultado;
}

// 3. Función para devolver el mayor de tres números
export function mayorDeTresNumeros(a, b, c) {
  return Math.max(a, b, c);
}

// 4. Función para devolver la suma de los números entre a y b
export function sumaEntreNumeros(a, b) {
  let suma = 0;
  for (let i = a; i <= b; i++) {
    suma += i;
  }
  return suma;
}

// 5. Función para devolver el número de números pares entre a y b
export function numerosParesCount(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

// 6. Función para calcular la media de las notas pasadas como parámetros
export function mediaDeNotas(...notas) {
  const suma = notas.reduce((acc, curr) => acc + curr, 0);
  return suma / notas.length;
}

// 7. Ver las combinaciones de 3 números (del 1 al 9) que sumen n
export function combinacionesDeTresNumeros(a, b, c, n) {
  const combinaciones = [];
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      for (let k = 1; k <= c; k++) {
        if (i + j + k === n) {
          combinaciones.push([i, j, k]);
        }
      }
    }
  }
  return combinaciones;
}

// 8. Ver las combinaciones de 4 números (del 1 al 9) que sumen n
export function combinacionesDeCuatroNumeros(a, b, c, d, n) {
  const combinaciones = [];
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      for (let k = 1; k <= c; k++) {
        for (let l = 1; l <= d; l++) {
          if (i + j + k + l === n) {
            combinaciones.push([i, j, k, l]);
          }
        }
      }
    }
  }
  return combinaciones;
}

// 9. Función que comprueba si un número es primo
export function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 10. Función que devuelve el factorial de un número
export function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}





