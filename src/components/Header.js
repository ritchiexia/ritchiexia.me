import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { useSpring, animated } from "react-spring";

const Header = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(100%)" },
  });
  return (
    <header className="header">
      <animated.div style={props}>
        <img className="profilepic" src="images/pfp.jpg" alt="pfp" />
      </animated.div>
      <div className="profileright">
        <h1>Ritchie Xia</h1>
        <ul className="profileiconlist">
          <a href="https://github.com/ritchiexia">
            <GithubIcon className="profileicon" />
          </a>
          <a href="mailto:rxia@student.ubc.ca">
            <MailIcon className="profileicon" />
          </a>
          <a href="https://www.linkedin.com/in/ritchie-xia-1b5052206/">
            <LinkedInIcon className="profileicon" />
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
