import {
    janKenPonFigures,
    books,
    cardOrder,
    cardSigns,
    characters,
    movies,
    numbers,
    people,
} from './data';

// length
export const maxItems = (arr, num) => { };

// every
export const canAllDrink = (arr) =>
    arr.length && arr.every((value) => value.age >= 18);

// some
export const canSomeoneDrink = (arr) => arr.some((value) => value.age >= 18);

// // filter
export const characterFilter = (
    arr,
    options = {
        minAge: undefined,
        name: undefined,
        media: undefined,
        type: undefined,
        gender: undefined,
    }
) =>
    arr.filter((character) => {
        let minAgePasses = true;
        let namePasses = true;
        let mediaPasses = true;
        let typePasses = true;
        let genderPasses = true;

        if (options.minAge !== undefined) {
            minAgePasses = character.age >= options.minAge;
        }

        if (options.name !== undefined) {
            namePasses = character.name
                .toLowerCase()
                .includes(options.name.toLowerCase().trim());
        }

        if (options.media !== undefined) {
            mediaPasses = character.media.includes(options.media);
        }

        if (options.type !== undefined) {
            typePasses = character.type === options.type;
        }

        if (options.gender !== undefined) {
            genderPasses = character.gender === options.gender;
        }

        return (
            minAgePasses &&
            namePasses &&
            mediaPasses &&
            typePasses &&
            genderPasses
        );
    });

// // some
// export const isIsogra = (str) =>  };

// // rduce
// export const oddAndEe = (arr) =>  };

// // fill
// export const countShe = (num) =>  };

// // redce
// export const scoreAvrag = (arr) =>  };

// // reduce + forEach
// export const moreCommonWord = (str, backList) =>  };

// // Object.entries()export const findInObj = (obj, id) => { };

// // indexOf() + Math.ranom()
// export const janKenPo = (arr) =>  };

// // pipe
// export const palindro = (str) =>  };
// export const cesarCodex = (st, shift) =>  };

// // Matrix
// export const matrixLtter = (leter, num) =>  };
