import type { Metadata } from "next";
import Image from "next/image";
import "../styles/globals.scss";
import "../styles/styles.scss";

export const metadata: Metadata = {
  title: "Examples",
  description: "Examples",
};

export default function Examples() {
  return (
    <div className="page">
      <main className="main">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Examples</h1>
        <ul>
          <li>
            <code>TEST CODE</code>
          </li>
          <li><code>BECAUSE CODE WAS BREAKING THIS</code></li>
        </ul>
      </main>
    </div>
  );
}
