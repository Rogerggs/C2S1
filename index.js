//cadenas, escribir string de cualquiera de estas formas retorna lo mismo

//almacenar un string dentro de una variable
//usando el simbolo de ${} o + para agregar un string a una variable

let name = 'Roger'
console.log('Hola ' + name) //concatenacion
console.log("Hola name")
console.log(`Hola, ${name}`) //template literal

let poem = "The Wide Ocean"
const author = "Pablo Neruda"

const favesPoemLiteral = `${poem} by ${author}` //dos formas de escribir lo mismo
const favesPoem = poem + " by " + author
//El simbolo \n permite hacer saltos de linea

console.log(favesPoemLiteral)
console.log(favesPoem)

//como manipular los strings, splitear o cortar hasta un punto

const stringPrimitive ="dog cat fish"
console.log(typeof stringPrimitive)
const stringObject = new String("I'm a String")
console.log(typeof stringObject)

console.log(stringPrimitive[1]) //como palabra separada
console.log(stringPrimitive.charAt(0))
console.log(stringPrimitive.indexOf('m'))
console.log(stringPrimitive.lastIndexOf('a'))
console.log(stringPrimitive.slice(8, 11))
console.log(stringPrimitive.length) //para saber la longitud del string
console.log(stringPrimitive.split("-")) //si tiene un separador el string ejm: dog/cat/apple dog cat apple tiene parametro de limite
console.log(stringPrimitive.trim()) //elimina espacios en blanco

const newString = stringPrimitive.replace('dog', 'Eagle')
console.log(newString)











