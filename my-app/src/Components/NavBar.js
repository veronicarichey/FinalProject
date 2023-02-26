import { Link, useMatch, useResolvedPath } from "react-router-dom";

const path = window.location.pathname

export default function NavBar() {

    return (
    <nav className="nav">
        <Link to="/" className="site-title">Scrumptious.com</Link>
        <ul>
            <CustomLink to="/recipes">Recipes</CustomLink>
            <CustomLink to="/contactUs">Contact Us</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
             {children}   
            </Link>
        </li>
    )
}
