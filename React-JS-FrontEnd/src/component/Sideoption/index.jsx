import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../assets/menu.png';
import Project from '../assets/project.jpg';
import Defect from '../assets/defect.png';
import Employee from '../assets/employee.png';
import AddProject from '../assets/addproject.jpg';
import ListProject from '../assets/listproject.png';
import AddDefect from '../assets/add-defect.png';
import ListDefect from '../assets/listdefect.png';
import AddEmp from '../assets/add-emp.png';
import ListEmp from '../assets/list-emp.png';
import './style.css';

export class option extends Component {

    render() {
        return (
            
            <div>
                {/* <a href = "/addproject">Test Link for add project-form</a>
                <br/>
                <a href = "/listproject">Text Link for List Projects</a> */}
                <div className="menu">
                    <img alt = "menuIcon" id="menu-icon" src={Menu} />
                    <div className="option">
                        <img alt = "projectIcon" id="project-icon" src= {Project}/>
                        <Link to = '/addproject'>
                            <div className = "project" >
                                <img alt = "addProjectIcon" id = "addproject" src = {AddProject}/>
                            </div>
                        </Link>
                        <Link to = '/listproject'>
                            <div className = "project" >
                                <img alt = "listProjectIcon" id = "listproject" src = {ListProject}/>
                            </div>
                        </Link>
                    </div>
                    <div className="option">
                        <img alt = "defectIcon" id="defect-icon" src = {Defect}/>
                        <div className = "project">
                            <img alt = "addDefectIcon" id = "add-defect" src = {AddDefect}/>
                        </div>
                        <div className = "project">
                            <img alt = "listDefectIcon" id = "listdefect" src = {ListDefect}/>
                        </div>
                    </div>
                    <div className="option">
                        <img alt = "employeeIcon" id="employee-icon" src = {Employee}/>
                        <div className = "project">
                            <img alt = "addEmpIcon" id = "add-emp" src = {AddEmp}/>   
                        </div>
                        <div className = "project">
                            <img alt = "listEmpIcon" id = "list-emp" src = {ListEmp}/>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default option;