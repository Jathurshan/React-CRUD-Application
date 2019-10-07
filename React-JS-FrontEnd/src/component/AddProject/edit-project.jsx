import React, { Component } from 'react'
import './style.css';
import ProjectImg from '../assets/projectimg.jpg';
import Header from '../Header/index'
import Option from '../Sideoption/index'
import axios from 'axios';

export default class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
        }

        this.state.project = {
            name: this.props.match.params.name,
            description: " ",
            severity: "high",
            priority: "high",
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/test/project/" + this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({
                project_name: response.data.name,
                project_description: response.data.description,
                option_severity: response.data.severity,
                option_priority: response.data.priority
            });
        });
    }
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

    getToList = () => {
        this.props.history.push("/listproject")
    }

    onSubmit = (event) => {
        event.preventDefault();
        const update = {
            // projectId: this.state.project_id,
            name: this.state.project_name,
            description: this.state.project_description,
            severity: this.state.option_severity,
            priority: this.state.option_priority

        }
        console.log(update);

        axios.put("http://localhost:8080/test/project/"+ this.props.match.params.id, update).then(response => {
            if (response.status === 200) {
                alert("Your changes have been successfully updated..!");
                window.location.reload();
            }
        });
        this.getToList();
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
                        <img alt="Icon" id="formImg" src={ProjectImg} />
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
                            <select id="severity" className="dropdown" name="option_severity" onChange={this.changeSeverity} value={this.state.option_severity}>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div><br />
                        <div className="input-field">
                            <label className="title">Priority</label><br />
                            <select id="priority" className="dropdown" name="option_priority" onChange={this.changePriority} value={this.state.option_priority}>
                                <option value="high" >High</option>
                                <option value="medium" >Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div><br />
                        <div className="btn-grp">
                            <input type="submit" value="Update" />
                            <input type="button" value="Back" onClick={this.getToList} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
