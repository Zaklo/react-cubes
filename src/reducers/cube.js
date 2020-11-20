import {ADD_CUBE, SHUFFLE, CHANGE_ODD, STOP_ODD, CUBE_17} from '../constants/actions'

export const initialState = {
    number: 1,
    cubes: [],
    cube_17: false,
};

export const reducer = (state, action) => {
    let cubes;

    switch (action.type) {

        case ADD_CUBE:
            const cube = {
                w: 1,
                h: 1,
                color: `rgb(${Math.floor(Math.random() * Math.floor(255))},${Math.floor(Math.random() * Math.floor(255))},${Math.floor(Math.random() * Math.floor(255))})`,
                number: state.number,
                stop: false,
                animation: 0.01
            };

            return {
                ...state,
                cubes: state.cubes.concat(cube),
                number: state.number + 1,

            };

        case CUBE_17:

            cubes = state.cubes.map(cube => ({...cube}))
            cubes[state.cubes.length - 1].cube_17 = true
            return {
                ...state,
                cubes,
            }


        case SHUFFLE:
            cubes = state.cubes.map(cube => ({...cube}))
            cubes.sort(() => Math.random() - 0.5)
            return {
                ...state,
                cubes,
            }

        case CHANGE_ODD:
            cubes = state.cubes.map((cube) => {
                if (cube.number % 2 === 1) cube.animation = 0.05;

                return {...cube};
            });

            return {
                ...state,
                cubes,
            };

        case STOP_ODD:
            cubes = state.cubes.map((cube) => {
                cube.animation = 0.01

                return {...cube};
            });

            return {
                ...state,
                cubes,
            };

        default:
            return state;
    }
};
