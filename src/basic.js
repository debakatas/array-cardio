// for
const array = [
    'Alexa',
    'Cata',
    'Aleja',
    'Johandry',
    'Jhon',
    'Gustavo',
    'Carlos',
];

// for (let indice = 0; indice < array.length; indice += 1) {
//     console.log(array[indice]);
// }

// for (let indice in array) {
//     console.log(array[indice]);
// }

// for (let item of array) {
//     console.log(item);
// }

// for (let [indice, nombre] of array.entries()) {
//     console.log(`${nombre} llego de ${indice + 1}º`);
// }

// forEach
// array.forEach((value) => {
//     console.log(value)
// });

// filter
const nuevoArray = array.filter(
    (value) => value.toLowerCase().indexOf('j') !== -1
);

// False Family
const falsy = [0, '', NaN, false, null, undefined];

// falsy.forEach((value) => {
//     console.log(Boolean(value));
// });

// map
const nameSize = array.map(
    (value) => `
    <li>${value}<li>
`
);

const list = array
    .filter((value) => value.toLowerCase().includes('o'))
    .sort((prev, current) => {
        const letterPrev = prev.toLowerCase();
        const letterCurrent = current.toLowerCase();

        if (letterPrev === letterCurrent) return 0;
        if (letterPrev > letterCurrent) return 1;

        return -1;
    })
    .map((value) => value.toUpperCase());

// reduce
let average = 0;
for (const item of array) {
    average += item.length;
}

const count = array.reduce((accumulator, value, index) => {
    let newAcc = accumulator + value.length;
    if (index === array.length - 1) {
        newAcc /= array.length;
    }
    return newAcc;
}, 0);

const nameMap = array.reduce((accumulator, value) => {
    accumulator[value.toLowerCase()] = value.length;
    return accumulator;
}, {});
