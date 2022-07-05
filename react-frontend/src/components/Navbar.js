import './../style/navbar.css'
import logo from './../assets/logo.jpg' 
import word from './../assets/word.jpg' 
import{FaSearch} from "react-icons/fa";
import {FiGlobe} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdPerson} from "react-icons/io"
const Navbar = () => {

    return(
        
        <nav className='nav'>
            <div className='white-space'></div>
            <div className='left'>
                <div className='full-logo'>
                    <a href='#'><img src={logo} className="logo-img" /></a>
                    <a href='#'><img src={word} className="logo-word" /></a>
                </div>
            </div>
            <div className='middle'>
                <div className='nav-menu'>
                    <div className='texts'>
                        <span>Anywhere</span>
                        <span>Any week</span>
                        <span>Add guests</span>
                    </div>
                    <div className='search-div'>
                        <FaSearch className='search-btn' />
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='rightside-elements'>
                    <div className='host-btn'>
                        <span>Become a Host</span>
                    </div>
                    <div className='globe'>
                        <FiGlobe />
                    </div>
                    <div className='login-menu'>
                        <div className='burger'>
                            <GiHamburgerMenu />
                        </div>
                        <div className='profile-img'>
                            <IoMdPerson />
                        </div>
                    </div>
                </div>
            </div>
            
            

       </nav>
    )
}

export default Navbar;