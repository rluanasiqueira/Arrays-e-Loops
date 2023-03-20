// criar uma array com 5 paises

const nomeDePaises = ["brasil, japão, México, canadá, Equador"]
console.log(nomeDePaises)

// // adicione um país ao fim da lista
nomeDePaises.push('peru')
console.log(nomeDePaises)

// // retire o ultimo país da lista
nomeDePaises.pop()
console.log(nomeDePaises)

// // adicione um país ao começo da lista
nomeDePaises.unshift('chile')
console.log(nomeDePaises)

// // retire o país do inicio da lista
nomeDePaises.shift()
console.log(nomeDePaises)

// imprima o ultimo pais na tela
const ultimo = nomeDePaises[nomeDePaises.length - 1]
console.log(ultimo);

// imprima o segundo pais na tela
console.log(nomeDePaises[1])

// arrays e loops 

const numeros = [0, 5, 9, 11, 20]

let i = 0;
// enquanto o i for menor que a array
while (i < numeros.length) {
    console.log(numeros[i]);
    i++
}
