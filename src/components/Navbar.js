import './Navbar.css';
import Hamburger from './Hamburger';
// import {Link} from 'react-router-dom';

export default function Navbar(props){
    return (
      <header className="header flex-row">
        <div className="logo">
            <a className="logo nav__link" href="#">
                The-<span className="blue-txt">branding</span>-champs
            </a>
        </div>

        <nav className="nav flex-row">
            <div className="flex-row desktop">
                <div className="dropdown" data-dropdown>
                    <button className="nav__link" data-dropdown-button>Information</button>
                    <div className='dropdown__menu info-grid'>
                        <div className="menu__item">
                            <div className='dropdown__heading'>Free Tutorials</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>All</a>
                                <a href='#' className='nav__link'>Latest</a>
                                <a href='#' className='nav__link'>Popular</a>
                            </div>
                        </div>
                        <div className="menu__item">
                            <div className='dropdown__heading'>Courses</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>JavaScript</a>
                                <a href='#' className='nav__link'>CSS</a>
                                <a href='#' className='nav__link'>React</a>
                            </div>
                        </div>
                        <div className="menu__item">
                            <div className='dropdown__heading'>Blog</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>All</a>
                                <a href='#' className='nav__link'>Latest</a>
                                <a href='#' className='nav__link'>Popular</a>
                            </div>
                        </div>
                        <div className="menu__item">
                            <div className='dropdown__heading'>Other</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>Twitter</a>
                                <a href='#' className='nav__link'>Newsletter</a>
                                <a href='#' className='nav__link'>Discord</a>
                            </div>
                        </div>
                    </div>
                </div>

                <a href='#' className='nav__link'>Pricing</a>
                
                <div className="dropdown" data-dropdown>
                    <button className="nav__link" data-dropdown-button>Login</button>
                    <div className='dropdown__menu'>
                        <form className='nav__form'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"/>
                            <div className="flex-row form__action">
                                <button className='form__btn' type='submit'>Login</button>
                                <a href='#'>Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <input type="search" placeholder="Search..."></input>

            <Hamburger />
        </nav>
      </header>
    )
}


