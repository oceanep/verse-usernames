import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygon, polygonMumbai } from 'wagmi/chains'

import ConnectButton from './ConnectButton'

const chains = [polygon, polygonMumbai]
const projectId = '3d896847823ac0e3b56b32bea73e10ac'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function WcModal() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ConnectButton />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default WcModal;