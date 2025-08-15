import Image from "next/image";
import styles from './blog.module.scss';
import Link from 'next/link';

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
              className="logo"
              src="/johnc.jpg"
              alt="portrait"
              width={300}
              height={200}
            />
        <p className={styles.blogp}>THIS IS FLEX!
went on a day trip because I felt spicy,
took a walk to nowhere in particular. I fell down when I was walking. Thats okay, stuff happens. I got back up and bought a hot dog from a vendor. I asked if he had beer but he only had bud light so I left. </p>
      <ul className={styles.subnav}>
            <li>
                <Link href= "/blogV2" data-testid="subnav2"><span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>
            </li>
            <li>
                <Link href= "blog/pagev2" data-testid="subnav2"><span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>
            </li>
            <li>
                <Link href="blog/pagev2" data-testid="subnav3"><span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>
            </li>   
        </ul>
      </main>
    </div>
  );
}
