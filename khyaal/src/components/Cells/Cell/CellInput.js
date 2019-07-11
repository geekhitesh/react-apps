import React from 'react';
import {Form,Button} from 'react-bootstrap';

const cellInput = (props) => {
    let input = null;

    switch(props.control.type) {
        case 'select':
            input = <Form.Group style={{width:"600px"}} controlId={props.control.Id}>
                        <Form.Label>{props.control.label}</Form.Label>
                        <Form.Control as="select" multiple={props.control.multiple} placeholder={props.control.placeholder} onChange={props.changed}>
                        {
                            props.control.list.map( optValue=> (
                                <option key={optValue} value={optValue}>
                                                {optValue.toUpperCase()}
                                            </option>
                            ))
                        }
                        </Form.Control>
                    </Form.Group>;
            break;
        case 'text':
            input = <Form.Group controlId={props.control.Id}>
                    <Form.Label>{props.control.label}</Form.Label>
                    <Form.Control 
                            type="text" 
                            value={ props.control.value} 
                            onChange = {props.changed}
                            placeholder={props.control.placeholder} />
                    </Form.Group>
            break;
        case 'button':
            input = <Button variant="primary" type={props.control.type}>
                        Submit
                    </Button>
            break;
        default :
            input = null;
    }
    return (input);
};


export default cellInput;