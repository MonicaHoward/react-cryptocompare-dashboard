import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';

const CustomElement = styled.div`

`

class App extends Component {
  render() {
    return (
      <CustomElement>
        CryptoCompare Dashboard
      </CustomElement>
    );
  }
}

export default App;
