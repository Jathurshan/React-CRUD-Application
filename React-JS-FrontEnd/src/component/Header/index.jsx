import React, { Component } from 'react'
import './style.css'
import Pic from '../assets/logout.png';
import Logo from '../assets/defectTracker.png';
export class header extends Component {
    render() {
        return (
            <div id = "header">
                <img alt = "Icon" id= "logo" src = {Logo} />
                <span id = "name">Defect Tracker</span>
                <div id = "btn-part">
                    <img alt = "logoutIcon" src = {Pic} />
                    <span id ="tooltiptext">log-out</span>
                </div>
                
            </div>
        )
    }
}
export default header;