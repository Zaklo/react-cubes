import { ADD_CUBE, SHUFFLE, CHANGE_ODD, STOP_ODD, CUBE_17 } from '../constants/actions';

export const add_cube = () => {

    return {
        type : ADD_CUBE
    }
}

export const shuffle = () => {

    return {
        type : SHUFFLE
    }
}

export const change_odd = () => {

    return {
        type : CHANGE_ODD
    }
}

export const stop_odd = () => {

    return {
        type : STOP_ODD
    }
}

export const cube_17 = payload => {

    return {
        type : CUBE_17,payload
    }
}

