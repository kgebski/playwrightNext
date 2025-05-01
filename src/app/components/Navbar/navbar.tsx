import Link from 'next/link';
import "./navbar.module.scss";


export default function Navbar() {
    return <nav className="nav">
        <Link href="/" className="site-title" data-testid="home-logo">Test Site</Link>
        <ul>
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