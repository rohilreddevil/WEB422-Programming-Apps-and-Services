import React, { Component } from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';

class Projects extends Component{
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        fetch('https://thawing-dawn-70314.herokuapp.com/projects').then(res => res.json()).then((res) => {
            this.setState({
                projects: res
            });    
        }).catch((err) => {
            console.log("error");
        });
    }

    render(){
        return (
            <MainContainer sidebar="Projects">
                 <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map(project => {
                            let endDate = "";
                            if (project.ProjectEndDate == null) {
                                endDate =  "n/a"; // if endDate does not exist
                            }
                            else{
                                endDate = moment(project.ProjectEndDate).utc().format("LL");
                            }
                            return (
                                <tr key ={project._id}>
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{moment(project.ProjectStartDate).utc().format("LL")}</td>
                                    <td>{endDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table> 
            </MainContainer>
        )
    }

}
export default Projects;