import { Link, useNavigate } from "react-router-dom"



const Header = () => {
    const navigate = useNavigate()

    const pagesName: string[] = ['home', 'about', 'projects','resume', 'contact']

    return (
        <header>
            <div className="logo-and-nav flex">
                <div className="logo" onClick={() => navigate('/')}>
                    <img src={`src/assets/pics/logo.png`} alt='logo' title='logo' />
                </div>
                <nav className="header-nav-links">
                    <ul className="links flex">
                        {pagesName.map(page => {
                            return (
                                <li className="page-link flex center" key={page}>

                                    <Link to={`${page === 'home' ? '/' : page}`}>{page}</Link>
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
                            <li className="page-link" key={page}>
                                <Link to={`${page === 'home' ? '/' : page}`}>{page}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header