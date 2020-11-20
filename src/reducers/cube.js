export const initialState = {
    number: 0,
    cubes: [],
    cube_17: [],
    frequency_cube_17 : 17 // TODO pour définir la fréquence des easter-eggs
};

export const reducer = (state, action) => {
    let cubes;
    switch (action.type) {

        case "ADD_CUBE":
            const cube = {
                w: 100,
                h: 100,
                cx: 50,
                cy: 50,
                number: state.number,
                stop: false,
            };

            return {
                ...state,
                cubes: state.cubes.concat(cube),
                number: state.number + 1,
            };

        case 'CUBE_17':

            const {number} = action;

            return {
                ...state,
                cube_17: state.cube_17.concat(number)
            }

        case "SHUFFLE":
            cubes = state.cubes.map(cube => ({...cube}));

            cubes.sort(() => Math.random() - 0.5);

            return {
                ...state,
                cubes
            };

        case "CHANGE_ODD":
            cubes = state.cubes.map((cube) => {
                if (cube.number % 2 === 1) cube.stop = false;

                return {...cube};
            });

            return {
                ...state,
                cubes,
            };

        case "STOP_ODD":
            cubes = state.cubes.map((cube) => {
                if (cube.number % 2 === 1) cube.stop = true;

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
