import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';



const initialState = {
    list : null,
    selectedUserId: null,
    loaded: false
}

const setAllUsers = (state,action) => {

    return updateObject(state,{
        list: action.list,
    });

}

const setSelectedUser = (state,action) => {

    console.log("Set User Reducer: "+action.selectedUserId);
    let newState = null;
    newState = {
        ...state,
        selectedUserId: action.selectedUserId,
    }
    return newState;
}

const addUser = (state,action) => {

    const user = action.addUser;
    let newState = null;
    let users = [];
    users.push(user);

    if(state.list === null) {
        console.log("State is empty");
        newState = {
            ...state,
            list: users,
        }
    } else {
        console.log("State is not empty.");
        newState = updateObject( state, {
            list: state.list.concat(user),
            } );
    }
    return newState;
}


const editUser = (state,action) => {

    console.log("Edit User Reducer");

    const user = action.editedUser;
    // console.log(user);

    let index_user = 0;

    // console.log(state);

    state.list.forEach((element,index) => {
        console.log("element.employeeId:"+element.employeeId + " and user.employeeId"+user.employeeId);
        if(element.employeeId === user.employeeId ) {
            index_user = index;
        }
        // console.log(element);
    });

    console.log("Found at location:"+index_user);

    let newState = {
        ...state,
    };

    newState.list[index_user] = user;

    console.log(newState);

    return newState;
}


const reducer = (state = initialState,action) => {
    switch(action.type) {

        case actionTypes.SET_ALL_USERS : 
            return setAllUsers(state,action);
        case actionTypes.EDIT_USER :
            return editUser(state,action);
        case actionTypes.SET_USER :
            return setSelectedUser(state,action);           
        case actionTypes.VIEW_USER_DETAILS:
            return null;
        case actionTypes.ADD_USER:
            return addUser(state,action);    
        default : 
            return state;
    }
}


export default reducer;