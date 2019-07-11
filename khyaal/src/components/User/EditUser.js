import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import UserForm from './UserForm';
import Spinner from '../UI/Spinner/SpinnerX';

import axios from '../../axios-users';

class EditUser extends Component {

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
        processing: true,
    }

    // shouldComponentUpdate(nextProps,nextState) {

    //     console.log("EditUser| should component update");

    //     return (nextProps.selectedUserId !== this.props.selectedUserId || nextState.form !== this.state.form)
    // }

    componentWillMount() {
        

        if( this.props.selectedUserId !== null) {
            const user = this.props.users.filter((record,key) => {
                return record.employeeId === this.props.selectedUserId;
            });


            this.setState({
                processing:false,
                form: {...user[0]}
            });
        }    
    }


    onChangeHandler = (event,identifier) => {
        const newState = {...this.state.form};

        newState[identifier] = event.target.value;

        this.setState({ form: newState, });
    }

    editUserHandler = (event) => {
        event.preventDefault();
        this.setState({ processing:true});

        axios.post( '/employee/update', this.state.form )
        .then( response => {
            this.setState({ processing:false });
            this.props.onUserEdited(this.state.form);
            this.props.history.push('/user-list');
        } )
        .catch( error => {
            this.setState({ processing:false});
        });

    };

     render() {

        return (
            <div>
                 {
                     this.state.processing ? <Spinner/> : <UserForm parent="edit" action={this.editUserHandler} data = {this.state.form} changed={this.onChangeHandler}/>
                 }
                 
            </div>
           
         );
    }


}


const mapStateToProps = state => {
    return ({
        
        users: state.users.list,
        selectedUserId: state.users.selectedUserId,
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAllUsers : (users) => dispatch(actions.setAllUsers(users)),
        onUserEdited: (user) => dispatch(actions.editUser(user)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditUser);