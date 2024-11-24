const Projects = () => {

    type Project = {
        name: string,
        desc: string,
        link: string
    }

    const projects: Project[] = [
        {
            name: 'staybnb',
            desc: '',
            link: 'https://staybnb-1.onrender.com/#/?txt=&entryDate=&exitDate=&label=&placeType=any&pagination=30&adults=0&children=0&infants=0&pets=0&min=0&max=2000&bedrooms=any&beds=any&bathrooms=any&instant=false&selfCheckIn=false&allowsPets=false'
        },
        {
            name: 'manook',
            desc: '',
            link: 'https://tmanoon.github.io/manook/'
        },
        {
            name: 'form-generator',
            desc: '',
            link: 'https://tmanoon.github.io/form-generator/'
        },
        {
            name: 'ui-challenge',
            desc: '',
            link: 'https://github.com/tmanoon/frontend-UITask'
        },
        {
            name: 'appsus',
            desc: '',
            link: 'https://tmanoon.github.io/AppSus/'
        },
        {
            name: 'mister-bitcoin',
            desc: '',
            link: 'https://github.com/tmanoon/mister-bitcoin-vue'
        },
    ]

    return (
        <section className="projects">
            <h1>Projects</h1>
            <ul className="container grid">
                {
                    projects.map(project => {
                        return (
                            <li className="project">
                                <h3>{(project.name).replaceAll('-', ' ')}</h3>
                                <img src={`/src/assets/pics/projects/${project.name}.png`} alt={project.name} title={project.name} />
                                <p>{project.desc}</p>
                                <a href={project.link}>Move to project</a>
                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}

export default Projects