import './Hamburger.css';

export default function Hamburger(props) {
    function toggleMenu(e){
        const clicked = e.target;
        if (clicked.classList.contains('hamburger')){
            clicked.classList.toggle('active')
        } else {
            clicked.parentElement.classList.toggle('active');
            clicked.closest('[data-dropdown]').classList.toggle('active');
        }
    }

    function toggleSubMenu(e){
        const clicked = e.target;
        clicked.closest('[data-sub-menu]').classList.toggle('active')
    }
    
    return (
        <div className="dropdown mobile" data-dropdown>
            <div onClick={toggleMenu} className="hamburger" data-dropdown-button>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className='hamburger__menu'>
                <input type="search" placeholder="Search..."></input>

                <div className='sub__menu' data-sub-menu>
                    <button onClick={toggleSubMenu} className="mobile__nav__link">Information</button>
                    <div className="info-grid sub__menu__item">
                        <div className="">
                            <div className='dropdown__heading'>Free Tutorials</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>All</a>
                                <a href='#' className='nav__link'>Latest</a>
                                <a href='#' className='nav__link'>Popular</a>
                            </div>
                        </div>
                        <div className="">
                            <div className='dropdown__heading'>Courses</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>JavaScript</a>
                                <a href='#' className='nav__link'>CSS</a>
                                <a href='#' className='nav__link'>React</a>
                            </div>
                        </div>
                        <div className="">
                            <div className='dropdown__heading'>Blog</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>All</a>
                                <a href='#' className='nav__link'>Latest</a>
                                <a href='#' className='nav__link'>Popular</a>
                            </div>
                        </div>
                        <div className="">
                            <div className='dropdown__heading'>Other</div>
                            <div className='dropdown__links'>
                                <a href='#' className='nav__link'>Twitter</a>
                                <a href='#' className='nav__link'>Newsletter</a>
                                <a href='#' className='nav__link'>Discord</a>
                            </div>
                        </div>
                    </div>
                </div>

                <a href='#' className='mobile__nav__link'>Pricing</a>

                <div className='sub__menu' data-sub-menu>
                    <button onClick={toggleSubMenu} className="mobile__nav__link">Login</button>
                    <form className='nav__form sub__menu__item'>
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
    )
}