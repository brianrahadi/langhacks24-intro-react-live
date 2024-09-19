import IconMenu from '../assets/icons/icon-menu.svg'

export default function Header() {
    return (
        <header className="container header">
        <div className="header--title">
          <p className="header--name"><b>Sebastian Lee</b></p>

          <button id="menu-btn">
            <img src={IconMenu} alt="Menu Icon"/>
          </button>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#" className="btn">View Resume</a></li>
          </ul>

        </nav>
      </header>
    )
}