import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image
          src="/NFT_logo.png"
          alt="Conference Logo"
          width={200}
          height={144}
        />
      </div>
      <div>
        <h2>Welcome to NFTbay</h2>
        <h4> - Auctions powered by Celo</h4>
      </div>
    </header>
  );
}
