import './Navbar.css';
import { useState } from 'react';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import { navItems } from './Navitems';
import Dropdown from './Dropdown';

export default function Navbar(props){
    const [drop, setDrop] = useState(false);
    const [itemKey, setItemKey] = useState(0);

    function toggleDropdown(e){
        setDrop(true);
        setItemKey(Number(e.target.id));
    }
    return (
      <>
          <nav className="navbar">
            <div className="navbar__start">
                <Hamburger />
                <Link className="nav__logo" to='/home'>
                    The-<span className="blue-txt">branding</span>-champs
                </Link>
            </div>
            <div className="nav">
                <ul className="nav__items">
                    {navItems.map(item =>{
                        return (
                            <li className='nav__item' key={item.id} id={item.id} onMouseEnter={toggleDropdown} onMouseLeave={() => setItemKey(0)}>
                                <Link className={item.cName} id={item.id} to={item.path}>{item.title}</Link>
                                {<Dropdown dropdown={item.dropdown} dropdownType={item.dropdownType} itemId={item.id} itemKey={itemKey} />}
                            </li>)
                    })}
                </ul>
                <input type="search" placeholder="Search..."></input>
            </div>
          </nav>
      </>
    )
}
