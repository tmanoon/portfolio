const Projects = () => {

    type Project = {
        name: string,
        desc: string,
        link: string
    }

    const projects: Project[] = [
        {
            name: 'manook',
            desc: 'Manook is a streamlined E-Commerce platform built with Angular, designed to showcase proficiency in frontend development and data management. The site features a dynamic product catalog, a shopping cart powered by local storage for data persistence, and real-time updates to the cart and inventory for an intuitive shopping experience.',
            link: 'https://tmanoon.github.io/manook/'
        },
        {
            name: 'staybnb',
            desc: 'Staybnb is a fully functional Airbnb clone built using React, showcasing expertise in full-stack development. It features a responsive design for seamless experiences across devices, real-time chat powered by WebSockets, and secure user authentication and authorization. The project also highlights collaborative development through Git and GitHub.',
            link: 'https://staybnb-1.onrender.com/#/?txt=&entryDate=&exitDate=&label=&placeType=any&pagination=30&adults=0&children=0&infants=0&pets=0&min=0&max=2000&bedrooms=any&beds=any&bathrooms=any&instant=false&selfCheckIn=false&allowsPets=false'
        },
        {
            name: 'form-generator',
            desc: 'The Form Generator app is a TypeScript/JavaScript project designed to showcase frontend development skills and TypeScript proficiency. It features a dynamic form creator that generates forms based on user-uploaded JSON files, enabling streamlined form creation from predefined entities.',
            link: 'https://tmanoon.github.io/form-generator/'
        },
        {
            name: 'ui-challenge',
            desc: 'The UI Challenge involved recreating a website design from Figma using React, JavaScript, and SCSS/CSS. This project focused on pixel-perfect implementation, ensuring the design matched the specified sizes and tones precisely. It showcases expertise in frontend development, mobile-first design, and crafting responsive layouts with media queries for seamless experiences across all devices.',
            link: 'https://github.com/tmanoon/frontend-UITask'
        },
        {
            name: 'appsus-keep',
            desc: 'Appsus is a React-based application inspired by Google Keep. It enables users to create, delete, and organize notes with features like color coding and categorizing starred notes. The app supports multiple note formats, including text, images, and videos. Designed with CSS and React, it provides a fully responsive interface, ensuring compatibility across all devices.',
            link: 'https://tmanoon.github.io/AppSus/'
        },
        {
            name: 'mister-bitcoin',
            desc: 'Mister Bitcoin is a Vue.js application featuring a complete CRUDL system for managing user accounts and coin transfers. Users can log in, filter, add, delete, and transfer coins across a dynamic user collection. Built with Vuex for state management and styled using SCSS/CSS, the app supports real-time updates and local storage for persistent data. It highlights expertise in frontend development and state management.',
            link: 'https://github.com/tmanoon/mister-bitcoin-vue'
        },
        {
            name: 'schedulr',
            desc: 'Schedulr is a work-in-progress clone of Monday.com, designed for task management. This full-stack project is being built with Vue.js on the frontend, supported by Express.js and MongoDB on the backend. It features a login-signup system that directs users to personalized boards displaying their tasks. The project aims to deliver an intuitive and efficient task management experience.',
            link: 'https://github.com/JennyLottner/schedulr'
        },
    ]

    return (
        <section className="projects grid justify-center">
            <h1>Projects</h1>
            <ul className="container grid">
                {
                    projects.map(project => {
                        return (
                            <li className="project grid">
                                <h3>{(project.name).replaceAll('-', ' ')}</h3>
                                <img src={`/src/assets/pics/projects/${project.name}.png`} alt={project.name} title={project.name} />
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