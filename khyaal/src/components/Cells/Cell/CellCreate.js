import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/SpinnerX';

// import axios from '../../../axios-users';
import {Form,Button,Container,Row,Col, ButtonGroup} from 'react-bootstrap';
import CellInput from './CellInput';
import FilterControl from './Filter/FilterControl';
import axios from '../../../axios-users';

class CellCreate extends Component {

    state = {
        form : {
            controls: [ 
                {
                    id: 'title',
                    label: 'Title',
                    type:'text',
                    value: '',            
                    placeholder: 'e.g. New Joinees in last 30 days',
                    render:true,              
                },   
                {
                    id: 'viewType',
                    label: 'View Type',
                    type:'select',
                    list: ["","list","bar chart","line graph","pie chart"],
                    value: '',
                    render:true,
                },                                
                {
                    id: 'entity',
                    label: 'Entity',
                    type:'select',
                    list: ["","Users","XYZ","ABCD"],
                    value: '',
                    render:true,
                },            
                {
                    id: 'displayFields',
                    label: 'Display Fields',
                    type:'select',
                    list: ["name","doj","dob","employeeId","jobTitle","city","state"],
                    value: '',
                    multiple: true,
                    render:true,
                },               
                {
                    id: 'filterFields',
                    label: 'Filter Field',
                    type:'select',
                    purpose: 'filter',
                    list: ["","name","doj","dob","employeeId","jobTitle","city","state"],
                    value: '',
                    multiple:false,
                    render:true,
                },
                {
                    id: 'filterType',
                    label: 'Filter Type',
                    type:'select',
                    purpose: 'filter',
                    list: ["","DATE","ANNIVERSARY","EQUAL_STRING","OR","NUMBER","LIKE"],
                    value: '',
                    multiple:false,
                    render:true,
                },  
                {
                    id: 'filterRelation',
                    label: 'Filter Relation',
                    type:'select',
                    purpose: 'filter',
                    list: ["","<","<=",">",">=","="],
                    value: '',
                    multiple:false,
                    render:false,
                },                                   
                {
                    id: 'filterValue',
                    label: 'Filter Value',
                    type:'text',
                    value: '',
                    purpose: 'filter',
                    placeholder: 'enter multiple values (,) seperated',
                    render:true,
                },                       
            ],
        },
        filters: [], 
        cells:[],
        cellCount:0,       
        processing: false,
    }

    onChangeHandler = (event,identifier) => {
        
        const newState = {...this.state.form};
        let filterRelationRender = false;

        newState.controls.forEach(control => {

            if(control.id === identifier) {
                if(control.type === "select" && control.multiple ===true) {
                    let options = event.target.options;
                    let value = [];
                    for (let i = 0, l = options.length; i < l; i++) {
                      if (options[i].selected) {
                        value.push(options[i].value);
                      }
                    }
                    control.value = value;
                } else {
                    control.value = event.target.value;
                }
            }

            if(control.id === "filterType")
            {
                if(event.target.value === 'NUMBER') {
                    console.log("Filter Type: Number found");
                    filterRelationRender = true;   
                }
            }
                       
        });


        newState.controls.forEach(control => {
            if(control.id === 'filterRelation' ) {
                if(filterRelationRender===true)
                    control.render= true;
                else 
                    control.render = false;
            }

        });


        this.setState({ form: newState });
        
    }

    onFilterAddHandler = () => {

        let filterObject = {
            id:null,
            keyColumn:null,
            filterValues:[],
            type:null,
            relation:null,
        }

        filterObject.id = 1000000000 * Math.random();

        this.state.form.controls.forEach(control => {
            if(control.id === 'filterFields') {
                filterObject.keyColumn = control.value;
            } else if(control.id === 'filterType') {
                filterObject.type = control.value;
            } else if(control.id === 'filterRelation') {
                filterObject.relation = control.value;
            } else if(control.id === 'filterValue') {
                if(control.value.includes(','))
                    filterObject.filterValues = control.value.split(',');
                else
                    filterObject.filterValues[0] = control.value;
            }
        });

        this.setState({
            ...this.state,
            filters: this.state.filters.concat(filterObject),
        });
    }


    createCellHandler = () => {
        console.log("Create Cell Handler");
        let newCount = this.state.cellCount;
        newCount +=1;
        this.setState({cellCount: newCount});

        let cell = {
                // id: newCount,
                title:null,
                type:null,
                // data:null,
                filters: [...this.state.filters],
                fields: [], 
            };
        this.state.form.controls.forEach((control) => {
            switch(control.id) {
                case 'title':
                    cell.title = control.value;
                    break;
                case 'viewType':   
                    cell.type = control.value;
                    break;
                case 'displayFields':
                    cell.fields = [...control.value];
                    break;     
                default:
                    break;    
            }
        }); 
        
        console.log(cell);

        axios.post('/create-cell',cell)
        .then(response => {
            console.log(this.response);
            this.props.history.push('/');
        });

    };

    deleteFilterHandler = (id) => {
        let newFilters = [...this.state.filters];
        newFilters.splice(id,1);
        this.setState({
            filters:newFilters,
        });
    }

    render() {

        let formData = null;
        let filters = null;
        formData = this.state.form.controls.map((control,index) => {

            if(control.render===true) 
                return(
                    <CellInput 
                        key={index} 
                        control={control}
                        changed={(event) => this.onChangeHandler(event,control.id)}
                        />
                )
            else 
                return null;
        });        

        if(this.state.filters.length > 0) {
            filters = this.state.filters.map((filter,index) => {
                
                return(<FilterControl
                        key={index}
                        field={filter.keyColumn}
                        type={filter.type}
                        relation={filter.relation}
                        value={filter.filterValues}
                        deleted={() => this.deleteFilterHandler(index)}/>);
            });
        }
        return (
            <div>
                <Container>
                    <Row >
                        <Col>                
                        {
                            this.state.processing ? <Spinner/> :
                                <Form>                                   
                                    {formData}
                                    <ButtonGroup>
                                        <Button variant="primary" onClick={() => this.onFilterAddHandler()} type="button">
                                            Add Filter
                                        </Button>   
                                        <Button variant="danger" onClick={() => this.createCellHandler()} type="button">
                                            Create Cell
                                        </Button>   
                                    </ButtonGroup>
                                </Form>
                        }
                        </Col>
                        <Col>
                           {filters}
                        </Col>
                    </Row>
                </Container>

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

export default connect(mapStateToProps,mapDispatchToProps) (CellCreate);