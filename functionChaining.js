const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWhitD = people.filter(person => person.startsWith('R')).map(dperson => dperson.toUpperCase());

console.log(upperCasePeopleThatStartsWhitD)