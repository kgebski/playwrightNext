import Image from "next/image";
import styles from '../../blogV2/blogV2.module.scss';
import Link from 'next/link';

export default function Blog() {
  return (
      <main className={styles.mainV2}>
        <div className={styles.hero}>
          <Image
                        src="/johnc.jpg"
                        alt="portrait"
                        width={300}
                        height={200}
                      />
        </div>
        <div className={styles.heading}>
          <h1>Steve Brule</h1>
          <p>Steve loves traveling the country to report on the news ya dingus! </p>
          <h2>TRAVEL BLOG | RECENT POSTS</h2>
        </div>
        <div className={styles.tile1}>
          <Link href= "/blogV2" data-testid="artcle1">
          <Image
                      src="/blog1.jpg"
                      alt="portrait"
                      width={300}
                      height={200}
          />         
            <span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span>
          </Link>
        </div>
        <div className={styles.tile2}>
          <Link href="/blog" data-testid="article2">
          <Image
                      src="/blog2.jpg"
                      alt="portrait"
                      width={300}
                      height={200}
          />    
          <span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>           
        </div>
        <div className={styles.tile3}>
          <Link href="/blog" data-testid="article3">
          <Image
                      src="/blog3.jpg"
                      alt="portrait"
                      width={300}
                      height={200}
          />    
          <span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>
        </div>
         <div className={styles.tile4}>
          <Link href= "/blogV2" data-testid="artcle1">
          <Image
                      src="/blog4.jpg"
                      alt="portrait"
                      width={300}
                      height={200}
          />    
          <span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>
        </div>
        <div className={styles.tile5}>
          <Link href="/blog" data-testid="article2">
          <Image
                      src="/blog5.jpg"
                      alt="portrait"
                      width={300}
                      height={200}
          />    
          <span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>
        </div>
        <div className={styles.tile6}>
          <Link href="/blog" data-testid="article3">
          <Image
                      src="/blog6.jpg"
                      alt="portrait"
                      width={300}
                      height={200}
          />    
          <span className={styles.subnav_dateV2}>08.02.25</span> <span className={styles.subnav_titleV2}>Hiking Blog</span></Link>
        </div>
      </main>
  );
}
