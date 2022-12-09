import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import CustomDropdown from './CustomDropdown';
import { useSelector, useDispatch } from "react-redux";

function CustomNavbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    const auth = useSelector((state) => state.auth);
    return (
        <>
            <nav className='customNavbar'>
                <Link to='/' className='custom-navbar-logo' onClick={closeMobileMenu}>
                    Agri Business
                    <i class='fab fa-firstdraft' />
                </Link>
                <div className='custom-menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'custom-nav-menu custom-active' : 'custom-nav-menu'}>
                    <li className='custom-nav-item'>
                        <Link to='/' className='custom-nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='custom-nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/services'
                            className='custom-nav-links'
                            onClick={closeMobileMenu}
                        >
                            Services
                            <i className='fas fa-caret-down' style={{ "paddingLeft": "8px" }} />
                        </Link>
                        {dropdown && <CustomDropdown />}
                    </li>
                    <li className='custom-nav-item'>
                        <Link
                            to='/blogs'
                            className='custom-nav-links'
                            onClick={closeMobileMenu}
                        >
                            Blogs
                        </Link>
                    </li>
                    <li className='custom-nav-item'>
                        <Link
                            to='/contact-us'
                            className='custom-nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>

                        {auth._id &&
                            <Link
                                to='/dashboard'
                                className='custom-nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                user
                            </Link>

                        }
                        {!auth._id && <Link
                            to='/login'
                            className='custom-nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>}

                    </li>
                </ul>
                {!auth._id &&
                    <CustomButton
                        content="Login"
                    />
                }

                {auth._id &&
                    // <CustomButton
                    //     content="user"
                    // />
                    // <a href='/dashboard' style={{  }}> <i class="fa-solid fa-circle-user"></i></a>
                    <Link
                        to='/login'
                        style={
                            {
                                cursor: "pointer", color: "#243D25", fontSize: "1.6rem"
                            }
                        }
                    >
                        <i class="fa-solid fa-circle-user"></i>
                    </Link>
                }

            </nav>
        </>
    );
}

export default CustomNavbar;