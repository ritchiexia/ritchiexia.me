import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as TwitterIcon } from "../icons/twitter.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="profilepic" src="images/pfp.jpg" alt="pfp" />
      <div className="profileright">
        <h1>Ritchie Xia</h1>
        <ul className="profileiconlist">
          <a href="https://github.com/ritchiexia">
            <GithubIcon className="profileicon" />
          </a>
          <a href="https://twitter.com/ritchie_xia">
            <TwitterIcon className="profileicon" />
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
