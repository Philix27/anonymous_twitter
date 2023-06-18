import { type AppType } from "next/app";
import "../src/styles/index.scss";
// import Layout from "@/app/layout";
import { MasaProvider } from "@masa-finance/masa-react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <WagmiConfig config={config}>
      {/* <MasaProvider
        company="Masa"
        walletsToUse={["metamask", "valora"]}
        forceNetwork={"alfajores"}
        useRainbowKitWalletConnect
        // forceNetwork="celo"
        rainbowKitModalSize={"wide"}
        verbose={false}
      > */}
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
      {/* </MasaProvider> */}
    </WagmiConfig>
  );
};

export default MyApp;
