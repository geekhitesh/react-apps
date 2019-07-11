import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from '../../axios-users';
import Cell from '../Dashboard/Cell/Cell';
import {CardGroup} from 'react-bootstrap';


class  Init extends Component {


    state= {
        components: [
            // {   id:"1", 
            //     title:"Upcoming Birthdays",
            //     type:"list",
            //     data:null,
            //     filters: [
            //         {
            //             keyColumn: "dob",
            //             filterValues: ["20"],
            //             type: "ANNIVERSARY",
            //         },
            //     ],
            //     fields: ["name","dob","employeeId"], 

                
            // }, 
            // {   id:"2", 
            //     title:"Upcoming Work Anniversary",
            //     type:"list",
            //     data:null,
            //     filters: [
            //         {
            //             keyColumn: "doj",
            //             filterValues: ["909"],
            //             type: "ANNIVERSARY",
            //         },                    
            //         {
            //             keyColumn: "jobTitle",
            //             filterValues: ["S/W Engineering Specialist","Scrum Master"],
            //             type: "OR",
            //         },
            //         {
            //             keyColumn: "employeeId",
            //             filterValues: [96048],
            //             type: "NUMBER",
            //             relation: "<=",
            //         },                    
            //     ],
            //     fields: ["name","doj","dob","employeeId","jobTitle"], 

                
            // },
            // {   id:"3", 
            //     title:"Specialist",
            //     type:"list",
            //     data:null,
            //     filters: [
            //         {
            //             keyColumn: "jobTitle",
            //             filterValues: ["specialist"],
            //             type: "LIKE",
            //         },
            //     ],
            //     fields: ["name","doj","jobTitle"], 
                
            // },
            // {   id:"4",
            //     title:"New Joinee",
            //     type:"list",
            //     data:null,
            //     filters: [
            //         {
            //             keyColumn: "doj",
            //             filterValues: [30,60],
            //             type: "DATE",
            //         },
            //     ],
            //     fields: ["name","doj","employeeId"], 

                
            // },             
            // {   id:"5", 
            //     title:"Exact",
            //     type:"list",
            //     data:null,
            //     filters: [
            //         {
            //             keyColumn: "name",
            //             filterValues: ["hitesh ahuja"],
            //             type: "EQUAL_STRING",
            //             relation: ">",
            //         },
            //     ],
            //     fields: ["name","doj"], 
                
            // },                                                                                    
        ],
        processing:true,
    }
    
    componentWillMount() {

        console.log("InitComponent.js | Component will mount");
        if(this.props.users === null){
            console.log("Since users are empty. Calling api.");
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
                console.log(users);                      
                this.props.onSetAllUsers(users);
                

                axios.get('/cells')
                .then(response => {
                    console.log(response.data);
                    this.setState({components: response.data});
                    this.props.onSetAllCells(response.data);
                    this.setState({processing: false});
                });
            } )
            .catch( error => {
                this.setState({ processing:false});
            } );            
        } else {
            this.setState({processing: false});
        }

        
    }




    render() {


        let cells = null;

        if(!this.state.processing) {

            cells = this.props.components.map((component,index)=> {
                return (<Cell style={{ padding:'100px'}}
                            key={component.id}
                            type={component.type} 
                            data={this.props.users}
                            attributes={component}/>);
            });
        }


        return(
            <div>
                <CardGroup>
                    {cells}
                </CardGroup>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return ({
        users: state.users.list,
        selectedUserId: state.users.selectedUserId,
        components: state.cells.cells,
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAllUsers : (users) => dispatch(actions.setAllUsers(users)),
        onSetAllCells: (cells) => dispatch(actions.setAllCells(cells))
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (Init);