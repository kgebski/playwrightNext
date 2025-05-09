import type { Metadata } from "next";
import Image from "next/image";
import "../styles/globals.scss";
import "../styles/styles.scss";

export const metadata: Metadata = {
  title: "Docs",
  description: "Documentation",
};

export default function Docs() {
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
        <h1>Docs</h1>
        <div>
          <h3>Up to date documentation on best Next.js practices:</h3>
          <ol>
            <li>
            <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > Getting started  </a>
            </li>
            <li><a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > Creating your first page  </a></li>
         </ol>
         
         
        </div>
      </main>
    </div>
  );
}
