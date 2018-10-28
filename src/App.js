import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

const AppLayout = styled.div`
    padding: 40px;
`;

const MenuBar = styled.div`
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

const Content = styled.div`
    border-radius: 2px;
    padding: 1%;
`;

const checkFirstVisit = () => {
  let cryptoCompareData = localStorage.getItem('cryptoCompare');
  if(!cryptoCompareData){
    return {
      firstVisit: true,
        page: 'settings'
    }
  }
  return{};
};

class App extends Component {
    state = {
        page: 'dashboard',
        ...checkFirstVisit()
    };
    displayingDashboard = () => this.state.page ==='dashboard';
    displayingSettings = () => this.state.page ==='settings';
    firstVisitMessage = () => {
        if(this.state.firstVisit){
            return(
                <div>Welcome to CryptoCompare Dashboard. Please select your favorite coins to begin.</div>
            )
        }
    };

    confirmFavorites = () => {
        localStorage.setItem('cryptoCompare', 'test');
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
    };

    settingsContent = () => {
        return(
            <div>
                {this.firstVisitMessage()}
                <div onClick={this.confirmFavorites}>
                    Confirm Favorites
                </div>
            </div>
        )
    };

    render() {
        return (
            <AppLayout>
                <MenuBar>
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
                </MenuBar>
                    <Content>
                        {this.displayingSettings() && this.settingsContent()}
                    </Content>
            </AppLayout>
        );
    }
}

export default App;
