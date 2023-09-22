import React from 'react';

import {
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';

import themes from '@bitcoin-portal/verse-web-components/dist/themes';

import WalletConnect from './components/WalletConnect';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <WalletConnect>
      <ThemeProvider
        theme={themes.dark as unknown as DefaultTheme}
      >
        <Layout/>
      </ThemeProvider>
    </WalletConnect>
  );
}

export default App;
