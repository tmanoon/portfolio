const Socials = () => {

    type Social = {
        socialName: string,
        url: string
    }

    const socials: Social[] = [ {socialName: 'linkedin', url: 'https://www.linkedin.com/in/shoval-sabag/'},
        {socialName: 'x', url: 'https://x.com/kingbadood'}, {socialName: 'github', url: 'https://github.com/tmanoon'} ]

return (
        <div className="socials flex column">
            {socials.map(social => {
                return (
                    <a href={social.url} key={social.socialName} target="_blanc"><span className={social.socialName}></span></a>
                )
            })}
        </div>
    )
}

export default Socials