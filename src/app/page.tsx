import Image from "next/image";
import type { Metadata } from "next";
import "./styles/globals.scss";
import "./styles/styles.scss";

export const metadata: Metadata = {
title: "Homepage",
description: "It's a homepage bro",
};

export default function Home() {
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
      <h1>Homepage</h1>
      <ol>
        <li>
          Get started by editing <code>src/app/page.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="ctas">
        <a
          className="primary"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="logo"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          className="secondary"
        >
          Read our docs
        </a>
      </div>
    </main>
    
  </div>
);
}
