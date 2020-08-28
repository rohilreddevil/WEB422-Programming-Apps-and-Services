import React, { Component } from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';

class Employees extends Component{
    constructor(){
        super();
        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        fetch('https://thawing-dawn-70314.herokuapp.com/employees').then(res => res.json()).then((res) => {
            this.setState({
                employees: res
            });    
        }).catch((err) => {
            console.log("error");
        });
    }

    render(){
        return (
            <MainContainer sidebar="Employees">
                 <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name &amp; Postion</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => {
                            
                            return (
                                <tr key ={employee._id}>
                                    <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                                    <td>{employee.AddressStreet}, {employee.AddressCity} {employee.AddressState}, {employee.AddressZip}</td>
                                    <td>{employee.PhoneNum} ex: {employee.Extension}</td>
                                    <td>{moment(employee.HireDate).utc().format("LL")}</td>
                                    <td>$ {parseFloat(employee.SalaryBonus)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table> 
            </MainContainer>
        )
    }

}
export default Employees;