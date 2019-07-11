import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import User from '../../components/User/User';
import { CardGroup, Modal } from 'react-bootstrap';
import axios from '../../axios-users';
import Spinner from '../../components/UI/Spinner/SpinnerX';

class Users extends Component {

    state = {
        processing: true,
        user: null,
        show: false
    }


    componentWillMount() {
        console.log("Users.js | Component will mount");
        if(this.props.users === null){
            console.log("Since users are empty. Calling api");
            let users = null;
            axios.get( '/employee/list')
            .then( response => {
               users = Object.keys(response.data) 
                            .map((id,index) => {
                                return {    ...response.data[id],
                                    dob: response.data[id].dob.slice(0, 10),
                                    doj: response.data[id].doj.slice(0, 10)
                                };
                            });           
                this.props.onSetAllUsers(users);
                this.setState({processing: false});
            } )
            .catch( error => {
                this.setState({ processing:false});
            } );            
        } else {
            this.setState({processing: false});
        }     
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

     editUserHandler = (userId) => {
        this.props.onEditUser(userId);
        this.props.history.push('/edit-user');
    }


    userDetailHandler = (userId) => {
        console.log("User Detail Show Handler: "+userId);
        
        this.props.onUserDetails(userId);
        this.setState({show: true});
        // this.props.history.push('/user-detail');    
       
    }

    handleShow = () => {

        this.setState({ show: true });

      };
  
    handleHide = () => {

        this.setState({ show: false });
        this.props.history.push("/user-list");
    };

    render() {
        console.log("Rendering");
        let users = null;
        let selectedUser = null;
        let userComponent = null;

        if(this.props.selectedUserId != null) {
            selectedUser = this.props.users.filter((user,key) => {
                return user.employeeId === this.props.selectedUserId;
            });
            // console.log(selectedUser);
            userComponent =  Object.keys(selectedUser[0])
                                   .map((key,index) => {
                                       return <p key={index}><b>{key.toUpperCase()}:</b>{selectedUser[0][key]}<br/> </p>
                                   });
            
        }

        if(!this.state.processing) {
            console.log("Rendering Users");
            users = this.props.users.map((user,userKey) => {
                return (
                    <CardGroup key={userKey}>
                    <User
                        key={user.employeeId} 
                        name= {user.name}
                        jobTitle = {user.jobTitle}
                        dateOfJoining = {user.doj}
                        dateOfBirth = {user.dob}
                        project = {user.project}
                        experience = {user.experience}
                        performEdit = {() => this.editUserHandler(user.employeeId)}
                        getDetails = {() => this.userDetailHandler(user.employeeId)}
                    /></CardGroup>);
                    
            });
        } else {
            users = <Spinner/>;
        }




        return(
            <div>
                <CardGroup>
                {users}
                </CardGroup>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                        Employee: {this.props.selectedUserId}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {userComponent}
                    </Modal.Body>
                </Modal>
            </div>
        );

    }

}

const mapStateToProps = state => {
    return ({
        users: state.users.list,
        isAuthenticated: state.isAuthenticated,
        loaded: state.users.loaded,
        selectedUserId: state.users.selectedUserId,
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAllUsers : (users) => dispatch(actions.setAllUsers(users)),
        onEditUser : (userId) => dispatch(actions.setSelectedUser(userId)),
        onUserDetails: (userId) =>  dispatch(actions.setSelectedUser(userId)),
    };
};



export default connect(mapStateToProps,mapDispatchToProps) (Users);