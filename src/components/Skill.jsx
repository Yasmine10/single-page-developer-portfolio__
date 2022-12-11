const Skill = (props) => {
    return (
        <li className="skill">
            <h2 className="skill__language | h2">{props.skill.language}</h2>
            <p className="skill__experience">{props.skill.experience}</p>
        </li>
    );
}

export default Skill;