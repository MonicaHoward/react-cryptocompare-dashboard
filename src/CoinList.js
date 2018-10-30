import React from 'react';
import styled from 'styled-components';

const CoinGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`;
const CoinTile = styled.div`
    background: rgba(0, 0, 0, .3);

    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px;
    &:hover {
        cursor: pointer;
        color: purple;
    }
`;

export default function () {
    return(
        <CoinGrid>
            {Object.keys(this.state.coinList).map(coin =>
                <CoinTile> {coin} </CoinTile>)}
        </CoinGrid>
    )
}
