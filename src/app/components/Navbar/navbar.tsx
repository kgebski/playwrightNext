import Image from "next/image";
import Link from 'next/link';
import styles from "./navbar.module.scss";

export default function Navbar() {
    return <nav className={styles.nav}>
        <Link href="/" className={styles['site-title']} data-testid="home-logo">
             <Image
                      className={styles.nav__logo}
                      src="/next.svg"
                      alt="Next.js logo"
                      width={130}
                      height={28}
                      priority
                    />
        </Link>
        <ul className={styles.nav__ul}>
            <li>
                <Link href={{ pathname: '/docs' }} data-testid="nav-docs">Docs</Link>
            </li>
            <li>
                <Link href="/examples" data-testid="nav-examples">Examples</Link>
            </li>
            <li>
                <Link href="/blog" data-testid="nav-blog">Blog</Link>
            </li>   
        </ul>
    </nav>
}