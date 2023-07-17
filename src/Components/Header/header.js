import Logo from '../../assets/logos/logo.png';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const username = 'Farook J';
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={Logo} width='50' alt='Logo' />
                <div className='nav-container'>
                    <div className='nav-item'>
                        <Link to='/'> Home </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/profile'> Profile </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/products'> Products </Link>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div>Welcome, {username}</div>
            </div>
        </div>
    )
}

export default Header;