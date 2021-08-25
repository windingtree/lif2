import { StrictMode } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

import { globalStyle } from './styles';
const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

// @ts-ignore
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    Box: any;
    box: any;
    space: any;
    [name: string]: any;
  }
}

const renderApp = () => {
  render(
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>,
    document.getElementById('root')
  );
};

renderApp();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => renderApp());
}
