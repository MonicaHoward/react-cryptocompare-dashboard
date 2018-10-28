import React, { Component } from 'react';
import styled, {css} from "styled-components";


const Bar = styled.div`
    border-bottom: 1px solid #EEE;
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 40px;
    padding: 1%;
`;

const Logo = styled.div`
    font-size: 1.5em;
`;

const Toggle = styled.div`
    cursor: pointer;
    ${props => props.active && css`
    text-shadow: 0px 0px 60px #000;
    `} 
`;

export default function() {
    return(
        <Bar>
            <Logo>
                CryptoCompare
            </Logo>
            <div>
            </div>
            {!this.state.firstVisit && (
                <Toggle onClick={()=>{this.setState({page: 'dashboard'})}} active={this.displayingDashboard()}>
                    Dashboard
                </Toggle>)}
            <Toggle onClick={()=>{this.setState({page: 'settings'})}} active={this.displayingSettings()}>
                Settings
            </Toggle>
        </Bar>
    )
}