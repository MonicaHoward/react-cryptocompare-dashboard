import React from 'react';
import styled from 'styled-components';
import {backgroundColor, subtleBoxShadow} from "./Style";

const SearchContainer =  styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-top: 40px;
`;

const Label = styled.p`
    align-self: center;
    justify-self: end;
    margin: 1%;

`

const SearchInput = styled.input`
    border: 1px solid;
    height: 25px;
    ${subtleBoxShadow}
    background: rgba(0, 0, 0, .3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 1%;
`;

export default function(){
    return(
        <SearchContainer>
            <Label>Search All Coins</Label>
            <SearchInput />
        </SearchContainer>
    )
}