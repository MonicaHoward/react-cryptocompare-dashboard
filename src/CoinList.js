import React from 'react';
import styled, {css} from 'styled-components';
import {greenBoxShadow, redBoxShadow, subtleBoxShadow} from "./Style";

const CoinGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`;
const CoinTile = styled.div`
    ${subtleBoxShadow}
    background: rgba(0, 0, 0, .3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px;
    &:hover {
        cursor: pointer;
        ${greenBoxShadow}
     }
    ${props => props.favorite && css`
        &:hover {
            cursor: pointer;
            ${redBoxShadow}
        }
    `}
`;

const CoinHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
   
`;
const CoinSymbol = styled.div`
    justify-self: right;
`;

export default function(favorites=false) {
    let coinKeys = favorites ? this.state.favorites : Object.keys(this.state.coinList).slice(0, 20);
    return(
        <CoinGrid>
            {coinKeys.map(coinKey =>
                <CoinTile favorite={favorites} onClick={favorites ? () =>{this.removeCoinFromFavorites(coinKey)} : () =>{this.addCoinToFavorites(coinKey)}}>
                    <CoinHeader>
                        <div>{this.state.coinList[coinKey].CoinName}</div>
                        <CoinSymbol>{this.state.coinList[coinKey].Symbol}</CoinSymbol>
                    </CoinHeader>
                    <img style={{height: '50px'}} src={`http://cryptocompare.com/${this.state.coinList[coinKey].ImageUrl}`} />
                </CoinTile>
            )}

        </CoinGrid>
    )
}
