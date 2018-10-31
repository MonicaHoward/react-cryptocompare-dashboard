import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import MenuBar from './MenuBar';
import CoinList from './CoinList';
const cc = require('cryptocompare');

const AppLayout = styled.div`
    padding: 40px;
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
      page: 'settigns'
    }
  }
  return{};
};

class App extends Component {
    state = {
        page: 'settings',
        favorites: ['ETH', 'BTC', 'XMR', 'DOGE', 'EOS'],
        ...checkFirstVisit()
    };
    componentDidMount = () => {
        this.fetchCoins();
    };
    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({ coinList });
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
            page: 'settings'
        })
    };

    settingsContent = () => {
        return(
            <div>
                {this.firstVisitMessage()}
                <div onClick={this.confirmFavorites}>
                    Confirm Favorites
                </div>
                <div>
                    {CoinList.call(this, true)}
                    {CoinList.call(this)}
                </div>
            </div>
        )
    };

    loadingContent = () => {
        if(!this.state.coinList) {
            return(
                <div>Loading Coins. . .</div>
            )
        }
    }

    render() {
        return (
            <AppLayout>
                {MenuBar.call(this)}
                    {this.loadingContent() ||
                        <Content>
                            {this.displayingSettings() && this.settingsContent()}
                        </Content>}
            </AppLayout>
        );
    }
}

export default App;
