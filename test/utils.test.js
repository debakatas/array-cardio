import {
    canAllDrink,
    canSomeoneDrink,
    cesarCodex,
    characterFilter,
    findInObj,
    isIsogram,
    moreCommonWord,
    matrixLetter,
    maxItems,
    oddAndEven,
    palindrome,
    scoreAverage,
} from '../src/utils';

test('canAllDrink', () => {
    expect(canAllDrink([{ age: 19 }, { age: 20 }])).toBeTruthy();
    expect(canAllDrink([{ age: 18 }, { age: 54 }])).toBeTruthy();
    expect(canAllDrink([{ age: 15 }, { age: 20 }])).toBeFalsy();
    expect(canAllDrink([])).toBeFalsy();
});

test('canSomeoneDrink', () => {
    expect(canSomeoneDrink([{ age: 17 }, { age: 20 }])).toBeTruthy();
    expect(canSomeoneDrink([{ age: 5 }, { age: 54 }])).toBeTruthy();
    expect(canSomeoneDrink([{ age: 15 }, { age: 14 }])).toBeFalsy();
    expect(canSomeoneDrink([])).toBeFalsy();
});

test('cesarCodex', () => {
    expect(cesarCodex('abc')).toBe('def');
    expect(cesarCodex('The end comes by', 7)).toBe('Aol luk jvtlz if');
    expect(cesarCodex('Aol luk jvtlz if', -7)).toBe('The end comes by');
});

test('matrixLetter', () => {
    expect(matrixLetter('a', 1)).toBe(
        `
a
`
    );

    expect(matrixLetter('X', 3)).toBe(
        `
XXX
XXX
XXX
`
    );
});

test('characterFilter', () => {
    const characters = [
        {
            age: 55,
            gender: 'male',
            media: ['tv', 'comic'],
            name: 'All Might',
            type: 'hero',
        },
        {
            age: 18,
            gender: 'female',
            media: ['videogame'],
            name: 'Chell',
            type: 'hero',
        },
        {
            age: 245000,
            gender: 'male',
            media: ['tv', 'movie', 'comic'],
            name: 'Doomsday',
            type: 'villain',
        },
    ];

    expect(
        characterFilter(characters, {
            minAge: 20,
            media: 'tv',
            name: 'a',
        })
    ).toStrictEqual([
        {
            age: 55,
            gender: 'male',
            media: ['tv', 'comic'],
            name: 'All Might',
            type: 'hero',
        },
        {
            age: 245000,
            gender: 'male',
            media: ['tv', 'movie', 'comic'],
            name: 'Doomsday',
            type: 'villain',
        },
    ]);

    expect(
        characterFilter(characters, {
            minAge: 1000,
        })
    ).toStrictEqual([
        {
            age: 245000,
            gender: 'male',
            media: ['tv', 'movie', 'comic'],
            name: 'Doomsday',
            type: 'villain',
        },
    ]);

    expect(characters).toStrictEqual(characters);
});

test('findInObj', () => {
    expect(findInObj([{ id: 1 }, { id: 2 }], 1)).toStrictEqual({ id: 1 });
    expect(
        findInObj([{ id: 'mai', test: 'v' }, { id: 'oui' }], 'mai')
    ).toStrictEqual({ id: 'mai', test: 'v' });
});

test('isIsogram', () => {
    expect(isIsogram('Murcielago')).toBeTruthy();
    expect(isIsogram('The big dwarf only jumps')).toBeTruthy();
    expect(isIsogram('Centrifugadlos')).toBeTruthy();
    expect(isIsogram('Ana')).toBeFalsy();
    expect(isIsogram('El perro')).toBeFalsy();
});

test('moreCommonWord', () => {
    const englishBlackList = ['is', 'a', 'the'];
    const spanishBlackList = ['la', 'de', 'los', 'el', 'a'];

    expect(moreCommonWord('la casa es la cosa más larga')).toBe('la');
    expect(
        moreCommonWord(
            'Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++',
            [englishBlackList]
        )
    ).toBe('rust');
    expect(
        moreCommonWord(
            'Miembros de la Gran Raza eran inmensos conos rugosos de unos tres metros de altura, con la cabeza y otros órganos dispuestos en los extremos de una serie de miembros distensibles, de unos treinta centímetros de grosor, que se extendían a partir de sus cimas.',
            [spanishBlackList]
        )
    ).toBe('miembros');
});

test('maxItems', () => {
    expect(maxItems(Array(10), 4).length).toBe(4);
    expect(maxItems(Array(3), 4).length).toBe(3);
});

test('oddAndEven', () => {
    expect(oddAndEven([1, 2, 3])).toStrictEqual({ odd: [1, 3], even: [2] });
    expect(oddAndEven([14, 12, 200])).toStrictEqual({
        odd: [],
        even: [14, 12, 200],
    });
    expect(oddAndEven([-1, 431, 234, 9949])).toStrictEqual({
        odd: [-1, 431, 9949],
        even: [234],
    });
});

test('palindrome', () => {
    expect(palindrome('A la torre derrotala')).toBeTruthy();
    expect(palindrome('Ana')).toBeTruthy();
    expect(palindrome('Anita lava la tina')).toBeTruthy();
    expect(palindrome('Atar a la rata')).toBeTruthy();
    expect(palindrome('Diana va al D1')).toBeFalsy();
    expect(palindrome('Juan come janjo')).toBeFalsy();
    expect(palindrome('Laura no esta laura se fue')).toBeFalsy();
});

test('scoreAverage', () => {
    expect(scoreAverage([1, 2, 10, 30])).toBe(10.75);
    expect(scoreAverage([])).toBe(0);
    expect(scoreAverage([-10, 10])).toBe(0);
    expect(scoreAverage([100, 7, 20, 30])).toBe(39.25);
});
