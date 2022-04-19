import "../styles/globals.css";
import "@celo-tools/use-contractkit/lib/styles.css";
import { Alfajores, ContractKitProvider } from "@celo-tools/use-contractkit";

import type { AppProps } from "next/app";

import Spacer from "../components/Base/Spacer";
import Layout from "../components/Base/Layout";
import Wallet from "../components/Wallet/Wallet";

function AppRoot({ Component, pageProps }: AppProps) {
  return (
  	<ContractKitProvider
      dapp={{
        name: "NFTbay",
        description: "Auction App",
        url: "https://celoconnect.com/",
        icon: "NFT_logo.png",
      }}
      network={Alfajores}
    >
      <Layout>
        <Wallet />
        <Spacer axis="vertical" size={32} />
        {/* In next, all the pages created within `/pages` can be accessed by its name
          and are displayed here */}
        <Component {...pageProps} />
      </Layout>
    </ContractKitProvider>
  );
}

export default AppRoot;
