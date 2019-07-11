import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container , Row } from 'react-bootstrap'
import Header from '../../components/Navigation/Header/Header';


class Layout extends Component {
    state = {
        
    }


    render () {
        return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <main >
                        {this.props.children}
                    </main>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );