// Buenas Pablo.
// Te dejo por aquí el ejercicio para que me lo resuelvas. Usa tu GitHub para subir el código y así poder verlo cuando lo termines. Si no puedes subirlo al repositorio, me lo dices por aquí o lo vemos cuando vuelvas de vacas.
// Cualquier duda o atasco que tengas me lo dices por aquí o por WhatsApp.
// El clásico FizzBuzz:

// Crea una función que
// - Devuelva por consola los 100 primeros números en una sola línea.
// - Sustituyendo cada múltiplo de 3 por fizz.
// - Sustituyendo cada múltiplo de 5 por buzz.
// - Sustituyendo cada múltiplo de 15 por fizzbuzz.
// - Separando cada elemento por comas y un espacio.
// - Menos el último elemento, que termina con un punto.

// Respuesta por consola:
// 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz, fizz, 22, 23, fizz, buzz, 26, fizz, 28, 29, fizzbuzz, 31, 32, fizz, 34, buzz, fizz, 37, 38, fizz, buzz, 41, fizz, 43, 44, fizzbuzz, 46, 47, fizz, 49, buzz, fizz, 52, 53, fizz, buzz, 56, fizz, 58, 59, fizzbuzz, 61, 62, fizz, 64, buzz, fizz, 67, 68, fizz, buzz, 71, fizz, 73, 74, fizzbuzz, 76, 77, fizz, 79, buzz, fizz, 82, 83, fizz, buzz, 86, fizz, 88, 89, fizzbuzz, 91, 92, fizz, 94, buzz, fizz, 97, 98, fizz, buzz.

// PD: al ser un ejercicio tan famoso es posible que en internet esté la respuesta muy fácilmente. Antes de buscar la solución prefiero explicártela yo.

miArreglo = []

for (var i = 1; i <= 100; i++) {
  if (i % 100 == 0) {
    miArreglo.push('buzz' + ' .')
  } else if (i % 15 == 0) {
    miArreglo.push('buzzfizz')
  } else if (i % 5 == 0) {
    miArreglo.push('buzz')
  } else if (i % 3 == 0) {
    miArreglo.push('fizz')
  } else {
    miArreglo.push(i)
  }
}

console.log(miArreglo)
