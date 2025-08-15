import type { Metadata } from "next";
import Image from "next/image";
//import styles from './examples.module.scss'

export const metadata: Metadata = {
  title: "Examples",
  description: "Examples",
};

export default function Examples() {
  return (
    <div className="page">
      {/* <div className={styles.sidebar}>
        <p>FILLER</p>
      </div> */}
      <main className="main">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Avoiding Grid 101</h1>
        <ul>
          <li>
            <code>TEST CODE</code>
          </li>
          <li><code>BECAUSE CODE WAS BREAKING THIS</code></li>
          <li>Flex</li>
        </ul>
      </main>
    </div>
  );
}
