import { useState } from 'react';
import { navItems } from './Navitems';
import { Link } from 'react-router-dom';
import './Hamburger.css';


export default function Hamburger(props) {
    const [show, setShow] = useState(false);
    
    function toggleMenu(e){
        setShow(!show);
        const clicked = e.target;
        if (clicked.classList.contains('hamburger')){
            clicked.classList.toggle('active')
        } else {
            clicked.parentElement.classList.toggle('active');
        }
    }

    return (
        <div>
            <div onClick={toggleMenu} className="hamburger mobile">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <MobileMenu show={show} />
        </div>
    )
}

function MobileMenu(props){
    const show = props.show;
    return(
        <div className={show ? 'mobile__dropdown active mobile' : 'mobile__dropdown mobile'}>
            <ul className='mobile__items'>
                {navItems.map(item => {
                    return(
                        <li key={item.id} className='mobile__item'>
                            <Link to={item.path} className='nav__link'>{item.title}</Link>
                        </li>)
                })}
            </ul>
        </div>
    )
}
