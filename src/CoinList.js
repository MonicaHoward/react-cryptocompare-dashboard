import React from 'react';
import styled from 'styled-components';
import {subtleBoxShadow} from "./Style";

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
        color: purple;
    }
`;
const CoinHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
   
`
const CoinSymbol = styled.div`
    justify-self: right;
`

export default function () {
    return(
        <CoinGrid>
            {Object.keys(this.state.coinList).slice(0, 100).map(coin =>
                <CoinTile>
                    <CoinHeader>
                        <div>{this.state.coinList[coin].CoinName}</div>
                        <CoinSymbol>{this.state.coinList[coin].Symbol}</CoinSymbol>
                    </CoinHeader>
                    <img style={{height: '50px'}} src={`http://cryptocompare.com/${this.state.coinList[coin].ImageUrl}`} />
                </CoinTile>
            )}

        </CoinGrid>
    )
}
