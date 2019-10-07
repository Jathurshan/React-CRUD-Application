import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import ProjectImg from '../assets/projectimg.jpg';
import Header from '../Header/index'
import Option from '../Sideoption/index'

export class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            description: " ",
            severity: "high",
            priority: "high",
        };
        console.log(props);
    }

    // changeId = (event) => {
    //     this.setState({
    //         project_id: event.target.value
    //     });
    // }

    changeName = (event) => {
        this.setState({
            project_name: event.target.value
        });
    }

    changeDescription = (event) => {
        this.setState({
            project_description: event.target.value
        });
    }

    changeSeverity = (event) => {
        this.setState({
            option_severity: document.getElementById("severity").value
        })
    }

    changePriority = (event) => {
        this.setState({
            option_priority: document.getElementById("priority").value
        })
    }

    clearField = () => {
        this.setState({
            project_name: "",
            project_description: "",
            option_severity: "",
            option_priority:""
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const save = {
            // projectId: this.state.project_id,
            name: this.state.project_name,
            description: this.state.project_description,
            severity: this.state.option_severity,
            priority: this.state.option_priority

        }
        console.log(save);
        
        axios.post("http://localhost:8080/test/project/", save).then(response => {
            if (response.status === 200) {
                alert("Project has been successfully added..!");
                window.location.reload();
            }
        });
        this.setState({
            name: "",
            description: "",
            severity: "",
            priority: ""
        });
    }
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Option />
                </div>
                <div className="modal">

                    <div className="image">
                        <img alt = "Icon" id="formImg" src={ProjectImg} />
                    </div>
                    <form className="formModel" onSubmit={this.onSubmit}>
                        {/* <div className="input-field">
                            <label className="title">Project ID</label><br />
                            <input type="text" name="project_id" placeholder="Project ID" />
                        </div><br /> */}
                        <div className="input-field">
                            <label className="title">Project Name</label><br />
                            <input type="text" name="project_name" value={this.state.project_name} placeholder="Project Name" onChange={this.changeName} />
                        </div><br />
                        <div className="input-field">
                            <label className="title">Project Description</label><br />
                            <input type="text" name="project_description" value={this.state.project_description} placeholder="Project Description" onChange={this.changeDescription} />
                        </div><br />
                        <div className="input-field">
                            <label className="title">Severity</label><br />
                            <select id = "severity" className="dropdown" name="option_severity" onChange={this.changeSeverity} >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div><br />
                        <div className="input-field">
                            <label className="title">Priority</label><br />
                            <select id = "priority" className="dropdown" name="option_priority" onChange={this.changePriority}>
                                <option value="high" >High</option>
                                <option value="medium" >Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div><br />
                        <div className="btn-grp">
                            <input type="submit" value="Add" />
                            <input type="button" value="Clear" onClick ={this.clearField}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default ProjectForm;