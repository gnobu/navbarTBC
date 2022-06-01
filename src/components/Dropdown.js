import {Link} from "react-router-dom";
import './Dropdown.css';

export default function Dropdown(props) {
    const dropdown = props.dropdown;
    const dropdownType = props.dropdownType;
    const itemId = props.itemId;
    const itemKey = props.itemKey;
    
    
    function toggleOff(e) {
        e.target.closest('dropdown').classList.remove('active');
    }

    return (dropdown && dropdownType === 'list')
    ? (
        <div className={(itemId===itemKey)? "dropdown active": "dropdown"}>
            <ul className="info-grid no-list-style">
                {dropdown.map((item => {
                    return (
                        <li key={item.id}>
                            <p className={item.cName}>{item.title}</p>
                            <ul className="no-list-style sublist">
                                {item.sub.map(sub => {
                                    return (
                                        <li key={sub.id}>
                                            <Link to={sub.path} className={sub.cName} onClick={toggleOff}>{sub.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        )
                    }))}
            </ul>
        </div>
    )
    : (dropdown && dropdownType === 'login')
    ? <LoginForm toggleOff={toggleOff} itemId={itemId} itemKey={itemKey} />
    : <></>
}

function LoginForm(props) {
    const toggleOff = props.toggleOff;
    const itemId = props.itemId;
    const itemKey = props.itemKey;

    return(
        <div className={(itemId===itemKey)? 'dropdown active' : 'dropdown'}>
            <form className='nav__form'>
                <label className="dropdown__title" htmlFor="email">Email</label>
                <input type="email" name="email"/>
                <label className="dropdown__title" htmlFor="password">Password</label>
                <input type="password" name="password"/>
                <div className="form__action">
                    <button onClick={toggleOff} className='form__btn' type='submit'>Login</button>
                    <Link onClick={toggleOff} to='/register'>Register</Link>
                </div>
            </form>
        </div>
    )
}