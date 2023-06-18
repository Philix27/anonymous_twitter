import { type AppType } from "next/app";
import "../styles/index.scss";
import Layout from "@/app/layout";
import { MasaProvider } from "@masa-finance/masa-react";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <MasaProvider
      company="Masa"
      walletsToUse={["metamask", "valora"]}
      forceNetwork={"alfajores"}
      useRainbowKitWalletConnect
      // forceNetwork="celo"
      rainbowKitModalSize={"wide"}
      verbose={false}
    >
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </MasaProvider>
  );
};

export default MyApp;
