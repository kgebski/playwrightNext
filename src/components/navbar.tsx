import Link from 'next/link';
export default function Navbar() {
    return <nav className="nav">
        <Link href="/" className="site-title">Site Name</Link>
        <ul>
            <li>
                <Link href={{ pathname: '/docs' }}>Docs</Link>
            </li>
            <li>
                <Link href="/examples">Examples</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>   
        </ul>
    </nav>
}