import { Link } from "react-router-dom"

const Header = () => {
    const pagesName: string[] = ['about', 'home', 'projects', 'resume']
    return (
    <header className="flex">
        <button className="header-hamburger">

        </button>
        <ul className="links flex">
            {pagesName.map(page => {
                return (
                <li className="page-link">
                    <Link to={`/${page}`}>{page}</Link>
                </li>
                )
            })}
        </ul>
    </header>
    )
}

export default Header