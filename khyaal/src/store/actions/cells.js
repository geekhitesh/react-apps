import * as actionTypes from './actionTypes';

export const setAllCells = (cells) => {

    return({
        type: actionTypes.SET_ALL_CELLS,
        cells: cells
    });
}