const About = () => {

    const stackLangs = ['html', 'css', 'javascript']
    const stackLibs = ['scss', 'typescript', 'react', 'redux', 'vue', 'vuex', 'angular',
     'rxss', 'nodejs', 'express', 'babel', 'socketIO']
    const stackDatabases = ['mongo', 'sql']
    const stackTechs = ['git', 'vscode', 'jira', 'trello', 'monday', 'restfulAPI']

    return (
        <section className="about">
            <div className="txt-and-stack grid">
                <div className="txt flex column align-center">
                    <h1>About</h1>
                    <p>I’m Shoval Sabag, a Full-Stack Developer focused on building efficient, user-friendly web applications.
                        <br />
                        Proficient in HTML, CSS, JavaScript, and frameworks like React, Angular, Node.js and more, I create dynamic, responsive, and scalable solutions.
                        <br />
                        My experience with RESTful APIs enables me to build reliable backend systems,
                        efficiently handling API requests and delivering responses with data from MongoDB or SQL databases.
                        <br />
                        Fluent in Hebrew and English, and proficient in Russian and Spanish, I collaborate effectively with diverse teams to ensure smooth project delivery.
                        <br />
                        Let’s connect to develop innovative solutions that drive success.</p>
                </div>
                <div className="stack">
                
                </div>
            </div>
        </section>
    )
}

export default About