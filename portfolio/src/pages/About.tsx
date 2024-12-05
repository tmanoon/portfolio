const About = () => {

    type Stack = {
        [key: string]: string[];
    }

    const stack: Stack = {
        lngs: ['html', 'css', 'javascript'],
        libs: ['scss', 'typescript', 'react', 'redux', 'vue', 'angular',
            'rxjs', 'nodejs', 'express', 'babel', 'socketIO'],
        databases: ['mongo', 'sql'],
        techsAndTools: ['git', 'vscode', 'jira', 'trello', 'monday', 'slack']
    }

    return (
        <section className="about">
            <div className="txt-and-stack grid">
                <div className="txt flex column align-center">
                    <h1>About</h1>
                    <p>I’m Shoval, a Full-Stack Developer focused on building efficient, user-friendly web applications.
                        <br />
                        Proficient in HTML, CSS, JavaScript, and frameworks like React, Angular, Node.js and more, I create dynamic, responsive, and scalable solutions.
                        <br />
                        My experience with RESTful APIs enables me to build reliable backend systems,
                        efficiently handling API requests and delivering responses with data from MongoDB or SQL databases.
                        <br />
                        Fluent in Hebrew and English, and proficient in Russian and Spanish, I collaborate effectively with diverse teams to ensure smooth project delivery.
                        <br />
                        Whenever I'm not working on new projects, I take care and play with my two little parrots 💜
                        <br/>
                        Let’s connect to develop innovative solutions that drive success!</p>
                </div>
                <div className="stack">
                    <ul className="tech-icons grid space-between">
                        {
                            Object.keys(stack).map(propName => (
                                stack[propName].map(techName => {
                                    return (
                                        <li className={techName} key={techName}>
                                            <img src={`/src/assets/pics/stack-icons/${techName}.svg`} alt={`${techName} icon`} title={`${techName} icon`} />
                                        </li>
                                    )
                                })
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About