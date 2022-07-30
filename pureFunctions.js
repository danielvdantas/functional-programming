// Função impura

// Exemplo1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius);
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Camarada',
    age: 'Jovem'
}
function changeName(name) {
    person.name = name;
}

// Função pura

// Exemplo 1:
const calcutateCircumference = function (pi, radius) {
    return pi * (radius * radius);
}

// Com arrow functions
const calculateCircunference = (pi, radius) => pi * (radius* radius);

// Exemplo 2:
const changePernosName = (person, name) => ({...person, name})