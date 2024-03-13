import React from 'react'
import './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
                    <input type="text" className='form-control' placeholder='Search in' />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button'>Search</button>
                    </div>
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
                                <FontAwesomeIcon icon="fa-solid fa-heart" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon="fa-solid fa-scale-balanced" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon="fa-regular fa-user" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav