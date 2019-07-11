import React from 'react';
import {Card,Table, CardGroup,Badge} from 'react-bootstrap';
import TableRow from './TableRow';

const list = (props) => {

    let transformedData = [];
    let header = null;
    const fields = props.attributes.fields;


    if(props.data.length > 0 ) {

        header = Object.keys(props.data[0])
        .filter((field,index) => {
        return fields.includes(field);
        })
        .map((field,index)=> {
        return <th key={index}>{field.toUpperCase()}</th>
        });

        transformedData = props.data.map((record,index_i) =>{

        let row = Object.keys(record)
                .filter((key,index)=> {
                    return fields.includes(key);
                })
                .map((key,index) => {
                        return <td key={index}>{record[key]}</td>
                });

        return (<TableRow key={index_i}>{row}</TableRow>);
        });
    }



    return(
        <CardGroup>
        <Card style={{ width:'30rem', marginLeft:'10px',marginTop:'10px'}}>
            <Card.Header>{props.attributes.title} <Badge variant="secondary"> {transformedData.length}</Badge></Card.Header>
            <Card.Body style={{height:'15rem',overflow: "auto"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <TableRow>
                            {header}
                        </TableRow>
                    </thead>
                    <tbody>
                        {transformedData}
                    </tbody>
                    
                </Table>
            </Card.Body>
        </Card>
        </CardGroup>
    );
};


export default list;