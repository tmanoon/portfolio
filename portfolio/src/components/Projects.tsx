import { projects } from "../data"

const Projects = () => {

    return (
        <section className="projects grid justify-center" id="projects">
            <h1>Projects</h1>
            <ul className="container grid">
                {
                    projects.map(project => {
                        return (
                            <li className="project grid" key={project.name}>
                                <h3>{(project.name).replaceAll('-', ' ')}</h3>
                                <img src={`/src/assets/pics/projects/${project.name}.png`} alt={project.name} title={project.name} onClick={() => window.open(project.link, "_blank")} />
                                <p>{project.desc}</p>
                                <button><a href={project.link} target="blank">Enter</a></button>
                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}

export default Projects