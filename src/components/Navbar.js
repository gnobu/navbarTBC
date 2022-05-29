import './Navbar.css';

export default function Navbar(){
    return (
      <header className="header">
        <nav>
            <div className="dropdown">
                <div className="nav__link">Information</div>
                <div className='dropdown__menu'>
                    <div></div>
                </div>
            </div>
            <div className='nav__link'>Pricing</div>
        </nav>
        <div>
            <div className="nav__link">Login</div>
            <input type="search" placeholder="Search..."></input>
        </div>
      </header>
    )
  }