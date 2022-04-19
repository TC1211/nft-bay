import Head from "next/head";
import Image from "next/image";
import styles from "./Layout.module.css";
import Header from "./Header";

const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>NFTbay</title>
          <meta name="description" content="NFT Auction" />
          <link rel="icon" href="../../public/NFT_logo.png" />
        </Head>
        <Header />

        {children}

      </div>
    </>
  );
};

export default Layout;
