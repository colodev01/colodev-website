import { useState } from 'react';
import './styles/Header.css';

const Header = () => {

    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
    <header className="header">
        <button 
            onClick={ toggleMenu }
         className="header-button">
        <svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <nav className={ `header-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="header-ul">
                <li className="header-li"><a href="#" className="header-a">About</a></li>
                <li className="header-li"><a href="#" className="header-a">Portfolio</a></li>
                <li className="header-li"><a href="#" className="header-a">Contact</a></li>
            </ul>
        </nav>

    </header>
)
}

export default Header