"use client";
import React from "react";
import { MasaProvider, useMasa } from "@masa-finance/masa-react";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Masa as MasaSdk } from "@masa-finance/masa-sdk";
import { providers, Wallet, ethers } from "ethers";

const provider = new providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const wallet = "";

export const masa = new MasaSdk({
  signer,
  networkName: "goerli",
});
new MasaSdk({
  cookie: "masa cookie",
  // wallet,
  apiUrl: "https://middleware.masa.finance",
  environment: "production",
  // network: "goerli",
  arweave: {
    host: "arweave.net",
    port: 443,
    protocol: "https",
    logging: false,
  },
});

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  publicClient,
  webSocketPublicClient,
});

const address = "0x7054b457f55dc0D47725bdeeB98eddE543eC448D";
export default function MasaComp() {
  const _provider = new ethers.providers.EtherscanProvider(address);
  console.log(_provider, "a provider");
  const apiKey = _provider.apiKey;
  console.log(apiKey, "apiKey");
  const balance = _provider.getBalance(address);

  return (
    <WagmiConfig config={config}>
      <MasaProvider>
        <div>Masa</div>
        {/* <MasaRequiredComponent /> */}
      </MasaProvider>
    </WagmiConfig>
  );
}
