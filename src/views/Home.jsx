
import projectsData from "../assets/data/projects.json";
import skillsData from "../assets/data/skills.json";

import Skill from "../components/Skill";
import Project from "../components/Project";

const Home = () => {

    const projects = projectsData.projects;
    const skills = skillsData.skills;

    return (
        <main className="main">
            <section className="home-hero">
                <picture>
                    <source srcSet="./src/assets/images/image-profile-desktop.webp" media="" />
                    <source srcSet="./src/assets/images/image-profile-tablet.webp" media="" />
                    <img src="./src/assets/images/image-profile-mobile.webp" alt="" />
                </picture>
                <h1 className="home-hero__title | h1">Nice to meet you! I'm <span>Adam Keyes</span>.</h1>
                <p className="home-hero__text">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <a href="#contact" className="home-hero__contact-btn | btn btn--primary">Contact me</a>
            </section>
            <section className="home-skills">
                <ul>
                    { skills.map((skill) => (
                        <Skill skill={skill} key={skill.id} />
                    ))}
                </ul>
                
            </section>
            <section className="home-projects | container">
                <div className="home-projects__header">
                    <h2 className="home-projects__header-title | h1">Projects</h2>
                    <a href="#contact" className="btn btn--primary">Contact me</a>
                </div>
                <div className="home-projects__list">
                    { projects.map((project) => (
                        <Project key={project.id} project={project}  />
                    ))}
                </div>
            </section>
            <section id="contact" className="home-contact">
                <div className="home-contact__header">
                    <h2 className="home-contact__header-title h2">Contact</h2>
                    <p className="home-contact__header-text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>
                <form action="">
                    <fieldset>
                        <legend>User info</legend>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" />
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn--primary">Send message</button>
                </form>
            </section>
        </main>
    );
}

export default Home;