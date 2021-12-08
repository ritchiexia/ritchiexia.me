import Icons from './Icons'
import FadeIn from 'react-fade-in'

const icons = [
  {
    id: "github",
    href: "https://github.com/ritchiexia",
    src: "images/github.png"
  },
  {
    id: "twitter",
    href: "https://twitter.com/ritchie_xia",
    src: "images/twitter.png"
  },
  {
    id: "mail",
    href: "mailto:rxia@student.ubc.ca",
    src: "images/mail.png"
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/ritchie-xia-1b5052206/",
    src: "images/linkedin.png"
  }
]

const Header = () => {
  return (
    <FadeIn>
    <header className="header">
      <img className="profilepic" src="images/pfp.jpg" alt="pfp"/>
      <FadeIn>
        <h1>Ritchie Xia</h1>
        <Icons icons={icons} />
      </FadeIn>
    </header>
    </FadeIn>
  )
}

export default Header
