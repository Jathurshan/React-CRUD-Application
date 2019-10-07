import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

import Header from '../Header/index'
import Option from '../Sideoption/index'
import Edit from '../assets/addproject.jpg'
import Recycle from '../assets/recycle.jpg'

export class ListProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: []
        }
        console.log(props);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/test/project").then(response => {
            // console.log(response.data.content);
            this.setState({ project: response.data.content });
        });
        this.loadData();
    }

    deleteProject = (id) => {
        axios.delete("http://localhost:8080/test/project/" + id).then(response => {
            this.loadData();
        })
    }

    loadData = () => {
        axios.get("http://localhost:8080/test/project").then(response => {
            // console.log(response)
            this.setState({ project: response.data.content });
        });
    }

    getToEditPage = (id) =>{
        this.props.history.push(`/editproject/${id}`);
    }

    render() {
        return (
            <div onLoad={this.loadData}>
                <div>
                    <Header />
                </div>
                <div>
                    <Option />
                </div>
                <h1 id="list-title">Project Details</h1>
                <Link to='/addproject'>
                    <button id="add">Add+</button>
                </Link>

                <div >
                    <table>
                        <thead>
                            <tr>
                                <th>Project ID</th>
                                <th>Project Name</th>
                                <th>Project Description</th>
                                <th>Severity</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.project.map(data => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.severity}</td>
                                    <td>{data.priority}</td>
                                    <td id={data.id} style={{
                                        backgroundColor: 'white',
                                        // height:'5px'
                                        // position: 'absolute',
                                        // top: '30px',
                                        // display:'inline-flex'

                                    }}>
                                        <div id='button_edit' onClick = {() => this.getToEditPage(data.id)}>
                                            <img alt="editIcon" id="edit" src={Edit} />
                                        </div>
                                        <div id='button_delete' onClick={() => window.confirm("Are you sure you want to delete this?") && this.deleteProject(data.id)}>
                                            <img alt="deleteIcon" id="delete" src={Recycle} />
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}
export default ListProject;