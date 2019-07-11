import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';



class UserDetail extends Component {

    state = {
        show: true,
    }

    handleShow = () => {

        this.setState({ show: true });

      };
  
    handleHide = () => {

        this.setState({ show: false });
        this.props.history.push("/user-list");
      };


      render() {

          return(
            <>
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Custom Modal Styling
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Sample
                </p>
              </Modal.Body>
            </Modal>
          </>
          );
      }



}


export default UserDetail;

