import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import UserForm from './UserForm';
import Spinner from '../UI/Spinner/SpinnerX';

import axios from '../../axios-users';

class AddUser extends Component {

    state = {
        form : {
            name : '',
            dob : '',
            employeeId : '',
            jobTitle : '',
            doj: '',
            hobbies : '',
            city: '',
            state: '',
            zip: '',
            project: '',
        },
        processing: false,
    }

    onChangeHandler = (event,identifier) => {
        const newState = {...this.state.form};

        newState[identifier] = event.target.value;

        this.setState({ form: newState, });
    }

    addUserHandler = (event) => {
        event.preventDefault();
        console.log("Add User Handler");
        this.setState({ processing:true});

        axios.post( '/employee/create', this.state.form )
        .then( response => {
            this.setState({ processing:false });
            this.props.onUserAdded(this.state.form);
            this.props.history.push('/user-list');
        } )
        .catch( error => {
            this.setState({ processing:false});
        } );

    };

    render() {
        return (
            <div>
                {
                    this.state.processing ? <Spinner/> : <UserForm action={this.addUserHandler} data = {this.state.form} changed={this.onChangeHandler}/>
                }
            </div>  

         );
    }


}


const mapStateToProps = state => {
    return ({
        selectedUserId: state.selectedUserId,
        users: state.users.list
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAllUsers : (users) => dispatch(actions.setAllUsers(users)),
        onUserAdded: (user) => dispatch(actions.addUser(user)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (AddUser);