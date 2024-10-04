import { Link } from "react-router-dom"


const Header = () => {

    type Page = {
        pageName: string,
        icon: string
    }

    const pagesName: string[] = ['about', 'home', 'projects', 'resume']

    return (
        <header>
            <div className="logo-and-nav flex">
                <div className="logo">
                    <h1>Shoval.S<span>;</span></h1>
                </div>
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
            </div>
            <nav className="menu-links-nav">
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
        </header>
    )
}

export default Header