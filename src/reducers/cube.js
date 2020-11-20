export const initialState = {
    number: 0,
    cubes: [],
    cube_17: [],
    frequency_cube_17: 17
};


export const reducer = (state, action) => {
    let cubes;

    switch (action.type) {

        case "ADD_CUBE":
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
                if (cube.number % 2 === 1) cube.animation = Math.random() / 10;

                return {...cube};
            });

            return {
                ...state,
                cubes,
            };

        case "STOP_ODD":
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
