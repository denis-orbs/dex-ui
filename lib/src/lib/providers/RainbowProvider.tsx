import React, { useMemo } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, optimism, arbitrum, base, linea, zkSync } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface Props {
  appName?: string;
  projectId?: string;
  infureKey?: string;
  children: React.ReactNode;
}



const RainbowProvider = ({
  children,
  projectId,
  infureKey,
  appName,
}: Props) => {
  const { chains, wagmiConfig } = useMemo(() => {
    const { chains, publicClient } = configureChains(
      [polygon, optimism, arbitrum, base, linea, zkSync],
      [
        infuraProvider({ apiKey: import.meta.env['VITE_INFURA_KEY'] }),
        publicProvider(),
      ]
    );

    const { connectors } = getDefaultWallets({
      appName: import.meta.env['VITE_APP_NAME'] || 'My RainbowKit App',
      projectId: projectId!,
      chains,
    });



    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors,
      publicClient,
    });

    return {
      chains,
      wagmiConfig,
    };
  }, [projectId, infureKey, appName]);

  


  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ConnectButton />
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};


export default RainbowProvider