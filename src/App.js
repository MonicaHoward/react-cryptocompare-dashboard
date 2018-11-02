import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import {subtleBoxShadow} from "./Style";
import MenuBar from './MenuBar';
import CoinList from './CoinList';
import Search from './Search';
import _ from 'lodash';
const cc = require('cryptocompare');

const AppLayout = styled.div`
    padding: 40px;
`;

const Content = styled.div`
    border-radius: 2px;
    padding: 1%;
`;
const MAX_FAVORITES = 10;


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

const ConfirmButton = styled.div`
    border: 1px solid;
    margin: 2%;
    height: 25px;
    width: 10%;
    ${subtleBoxShadow}
    background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(255, 255, 255, .2));
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 50px;
    padding: 1%;
    justify-self: center;
    &:hover {
        cursor: pointer;
        border:2px solid black;
    }
`

class App extends Component {
    state = {
        page: 'settings',
        favorites: ['ETH', 'BTC', 'LTC', 'XRP', 'EOS'],
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
        this.setState({
            firstVisit: false,
            page: 'settings'
        });
        localStorage.setItem('cryptoCompare', JSON.stringify({
            favorites: this.state.favorites
        }));

    };

    settingsContent = () => {
        return(
            <div>
                {this.firstVisitMessage()}
                {Search.call(this)}
                <div>
                    {CoinList.call(this, true)}
                    <ConfirmButton onClick={this.confirmFavorites}>
                        Confirm Favorites
                    </ConfirmButton>
                    <hr/>
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
    };
    addCoinToFavorites = (key) => {
        let favorites = [...this.state.favorites];
        if (favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({favorites})
        }
    };
    removeCoinFromFavorites = (key) => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)});
    };
    isInFavorites = (key) => {
        return(
            _.includes(this.state.favorites, key)
        )
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
