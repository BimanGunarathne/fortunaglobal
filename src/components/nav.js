import React from 'react'
import './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import 'materialize-css/dist/css/materialize.min.css'
import { faCartShopping, faHeart, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
function Nav() {
    return (
        <div className='header'>
            <div className='header_col1'>
                <div className='header_logo'>
                    <span>FORTUNAGLOBAL</span>
                </div>
            </div>
            <div className='header_col2'>
                <div className='header_search_bar'>
                    <form>
                        <input type='text' id='search' placeholder='Search in...' />
                    </form>
                </div>
            </div>
            <div className='header_col3'>
                <div className='header_social_icons'>
                    <ul>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='header_col4'>
                <div className='header_other'>
                    <ul>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className='text'>Wishlist</span>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faScaleBalanced} />
                                <span className='text'>Compair</span>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className='text'>Cart</span>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Nav