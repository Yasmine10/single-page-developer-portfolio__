const Project = (props) => {
    return(
        <article className="project">
            <div className="project__img-container">
                <picture>
                    <source srcSet={"./src/assets/images/thumbnail-" + props.project.imagePath + "-large.webp"} media="" />
                    <img src={"./src/assets/images/thumbnail-" + props.project.imagePath + "-small.webp"} alt="" />
                </picture>
            </div>
            <div className="project__content">
                <h3 className="project__title | h3">{props.project.title}</h3>
                <ul className="project__languages-used" role="list">
                    {props.project.languages.map((language, index) => (
                        <li key={index} className="project__language">{language}</li>
                    ))}
                </ul>
            </div>
            <div className="project__view-btns">
                <a href="#" className="btn btn--primary">View project</a>
                <a href="#" className="btn btn--primary">View code</a>
            </div>
        </article>
    );
}

export default Project;