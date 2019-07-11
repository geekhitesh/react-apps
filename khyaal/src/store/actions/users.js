import * as actionTypes from './actionTypes';

export const setAllUsers = (users) => {
    // console.log(users);
    return ({
        type: actionTypes.SET_ALL_USERS,
        list: users
    });
}

export const editUser = (user) => {
    console.log("Action | Edit User ");
     console.log();
    return({
        type: actionTypes.EDIT_USER,
        editedUser: user
    });
}

export const addUser = (user) => {
    console.log("Action | Add User");

    return({
        type: actionTypes.ADD_USER,
        addedUser: user
    });
}


export const setSelectedUser = (userId) => {
    console.log("Action | Set Selected User: "+userId);
    return({
        type: actionTypes.SET_USER,
        selectedUserId: userId
    });
}


export const getUserDetails = (userId) => {
    console.log("Action | Get Details of User: "+userId);
    return({
        type: actionTypes.VIEW_USER_DETAILS,
        selectedUserId: userId
    });
}