import Image from "next/image";
import "../styles/globals.scss";
import "../styles/styles.scss";

export default function Blog() {
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
        <h1>Blog</h1>
        <Image
              className="portrait"
              src="/johnc.jpg"
              alt="portrait"
              width={300}
              height={200}
            />
        <div className="blogp">
        <p>Had a full day as usual
went on a day trip because I felt recognized
took a walk to nowhere in particular while exercising
someone yelled at me again
went on a holiday while someone got angry at me
missed someone to getting help on something from someone
went to a class for (some character)
hurt myself as usual
had an adventure which led to big responsibility is weighing on me
saw art as usual</p>
        </div>
      </main>
    </div>
  );
}
