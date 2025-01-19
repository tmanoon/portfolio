const Header = () => {

    const pagesName: string[] = ['home', 'about', 'projects','resume', 'contact']

    return (
        <header>
            <div className="logo-and-nav flex">
                <div className="logo">
                    <a href="home"><img src={`src/assets/pics/logo.png`} alt='logo' title='logo' /></a>
                </div>
                <nav className="header-nav-links">
                    <ul className="links flex">
                        {pagesName.map(page => {
                            return (
                                <li className="page-link flex center" key={page}>
                                    <a href={`#${page}`}>{page}</a>
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
                                <a href={`#${page}`}>{page}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header