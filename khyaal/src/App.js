import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';

import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Users from './containers/Users/Users';
import Init from './components/Init/Init';
import EditUser from './components/User/EditUser'
import AddUser from './components/User/AddUser'
import UserDetail from './components/User/UserDetail'
import CellCreate from './components/Cells/Cell/CellCreate';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/user-list" component={Users} />
        <Route path="/edit-user" component={EditUser} />
        <Route path="/add-user" component={AddUser} />
        <Route path="/user-detail" component= {UserDetail}/>
        <Route path="/create-cell" component= {CellCreate}/>
        <Route path="/" exact component={Init} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/auth" component={asyncAuth} />
          {/* <Redirect to="/" /> */}
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
          {/* <Users/> */}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
