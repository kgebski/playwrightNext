export default function Navbar() {
    return <nav className="nav">
        <a href="www.google.com" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/pricing">Pricing</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}