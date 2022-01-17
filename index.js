// Declaración de variables
const texto = "hello world!";
console.log(typeof texto, texto);

const booleano = false;
// console.log(typeof booleano, booleano);

const numero = 4.23;
// console.log(typeof numero, numero);

let variableModificable = "hello world";
// console.log(variableModificable);

variableModificable += "!";
// console.log(variableModificable);

// Declaración de arreglos
const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
// console.log(arreglo);

// Declaración de objectos
const persona = {
  name: "Jhon",
  lastName: "Doe",
};
// console.log(persona);

persona["age"] = 20;
// console.log(persona);

persona.country = "CO";
// console.log(persona);

// console.log(persona.name);

// Retorno implicito
const foo = "a" === "b";
// console.log(foo);

// Operaciones sobre arreglos

// arreglo.forEach((elemento) => console.log(elemento));

const result = arreglo.find((elemento) => elemento === 2);
// console.log(result);

const resultTwo = arreglo.filter((elemento) => elemento > 2);
// console.log(resultTwo);

const resultThree = arreglo.map((elemento) => elemento + elemento);
// console.log(resultThree);

const resultFour = arreglo.map((elemento) => {
  const resultado = `${elemento} + ${elemento}`;
  return resultado;
});
// console.log(resultFour);

const resultFourV2 = arreglo.map((elemento) => `${elemento} + ${elemento}`);
// console.log(resultFourV2);

const resultFive = [...arreglo, 5];
// console.log(...arreglo);
// console.log(resultFive);

// Definición de funciones

const myFunction = (parameter) => {
  console.log(parameter);
};
// myFunction("Hello world!");

const myFunctionTwo = (name) => {
  return `Hello ${name}!`;
};
// console.log(myFunctionTwo("Jonatan"));