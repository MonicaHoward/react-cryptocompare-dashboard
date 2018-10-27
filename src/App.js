import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';

const AppLayout = styled.div`
  padding: 40px;
`;

const MenuBar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const Toggle = styled.div`

`;

const Content = styled.div`

`;


class App extends Component {
  render() {
    return (
        <AppLayout>
          <MenuBar>
            <Logo>
                CryptoCompare
            </Logo>
            <div>
            </div>
            <Toggle>
                Dashboard
            </Toggle>
            <Toggle>
                Settings
            </Toggle>
          </MenuBar>
          <Content>
            hello
          </Content>
        </AppLayout>
    );
  }
}

export default App;
