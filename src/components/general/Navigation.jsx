import { ReactComponent as Github } from "../../assets/images/icon-github.svg";
import { ReactComponent as FrontendMentor } from "../../assets/images/icon-frontend-mentor.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/icon-linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";

export default Navigation = () => {
    return (
        <nav id="main-nav" className="navigation | container" aria-label="Main">
            <a href="" className="navigation__logo">adamkeyes</a>
            
            <ul className="navigation__social-links" role="list">
                <li className="link">
                    <a href="">
                        <Github />
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li className="link">
                    <a href="">
                        <FrontendMentor />
                        <span className="sr-only">Frontend Mentor</span>
                    </a>
                </li>
                <li className="link">
                    <a href="">
                        <LinkedIn />
                        <span className="sr-only">Linkedin</span>
                    </a>
                </li>
                <li className="link">
                    <a href="">
                        <Twitter />
                        <span className="sr-only">Twitter</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}