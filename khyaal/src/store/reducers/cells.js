import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';


const initialState = {
    cells  :null,
}


const setAllCells = (state,action) => {

    return updateObject(state,{
        cells: action.cells,
    });
}

const reducer = (state = initialState,action) => {
    switch(action.type) {

        case actionTypes.SET_ALL_CELLS : 
            return setAllCells(state,action);  
        default : 
            return state;
    }
}

export default reducer;