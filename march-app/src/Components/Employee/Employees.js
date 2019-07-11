import React ,{Component} from 'react';
import Employee from './Employee';
import Button from './Button';
import axios from '../../axios-employees';
import Spinner from  '../Spinner/Spinner';
import CreateEmployee from '../Create/CreateEmployee';

class Employees extends Component {

    state = {
        employees: null,
        show:null,
    }

    componentWillMount() {
      console.log("Employees.js | Component will mount");
      this.setState({show:false});
      axios.get('/employee/list')
           .then((response) => {
             console.log(response.data);


              setTimeout(()=> {
                this.setState({
                  show:true,
                  employees: response.data
                 });
              },1000);
           });
    }

    hideEmployeeHandler = (id) => {

        let oldEmployees = [...this.state.employees];
        let newList = oldEmployees.filter((record) => {
              return record.id !== id;
        });
        this.setState({
          employees:newList
        });
      }




        
    toggleHandler = () => {
        const oldShow = this.state.show;
        this.setState({
        show: !oldShow
        });
}  

    render() {
      let transformedEmployees = null;
        if(this.state.show === true) {
           transformedEmployees = this.state.employees.map((record) => {
            return(
              <Employee 
                        key={record.id}
                        name={record.name} 
                        employeeId={record.employeeId}
                        hide={() => this.hideEmployeeHandler(record.id)}/>
            );
          });
        } else {
          transformedEmployees = <Spinner/>
        }


        return(
            <div>
                {/* <Button onClick={this.toggleHandler} value={"Toggle"} /><br/><br/> <br/> */}
                {transformedEmployees}
            </div>
        );
    }

}

export default Employees;