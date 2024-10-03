import { Link } from "react-router-dom"

const Header = () => {
    const pagesName: string[] = ['about', 'home', 'projects', 'resume']

    return (
        <header className="flex space-between">
            <div className="logo">
                <h1>Shoval.S;</h1>
            </div>
            <nav className="expanded-links-nav">
                <ul className="links grid">
                    {pagesName.map(page => {
                        return (
                            <li className="page-link">
                                <Link to={`/${page}`}>{page}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <button className="header-hamburger">
                <span className="ham-line"></span>
                <span className="ham-line"></span>
                <span className="ham-line"></span>
            </button>
            <nav className="header-nav-links">
                <ul className="links flex">
                    {pagesName.map(page => {
                        return (
                            <li className="page-link">
                                <Link to={`/${page}`}>{page}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header