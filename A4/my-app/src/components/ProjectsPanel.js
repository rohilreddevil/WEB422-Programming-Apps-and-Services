import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


class ProjectsPanel extends Component{
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
        return(
            <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Projects</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                          {this.state.projects.map(project => {
                            let activeDate = moment().diff(moment(project.ProjectStartDate), 'days');
                            return (
                                <tr key={project._id}>
                                    <td>{project.ProjectName}</td>
                                    <td>{'Active '+ activeDate + ' days'}</td>
                                </tr>
                            );
                        })}
                          </tbody>
                        </table>
                      </div>
                      <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                    </div>
                  </div>
        )
    }
}
export default ProjectsPanel;