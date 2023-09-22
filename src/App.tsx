import React from 'react';
import WalletConnect from './components/WalletConnect';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <WalletConnect>
      <Layout/>
    </WalletConnect>
  );
}

export default App;
