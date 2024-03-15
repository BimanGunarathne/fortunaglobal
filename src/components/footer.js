import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer'>
            <div className="header_top">
                <div className="inner_header_dive">
                    <div className="row">
                        <div class="footer_col1 col s12 m6 l3">
                            <h2>OVERVIEW</h2>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div class="footer_col2 col s12 m6 l3">
                            <h2>CATEGORIES</h2>
                            <ul>
                                <li><a href="">Made in Sri Lanka</a></li>
                                <li><a href="">Automotive</a></li>
                                <li><a href="">Food & Beverages</a></li>
                            </ul>
                        </div>
                        <div class="footer_col3 col s12 m6 l3">
                            <div className="docial_head">
                                <h2>FOLLOW US ON</h2>
                            </div>
                            <ul>
                                <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                                <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li className='linkedin'><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>
                        <div class="footer_col4 col s12 m6 l3">
                            <div className="store_head">
                                <h2>EXPERIENCE OUR APP</h2>
                            </div>
                            <div className="store_head">
                                <div className='image_googleplay'>
                                    <img src="http://localhost:3000/images/googleplay.webp" alt="" />
                                </div>
                                <div className='image_appleappstore'>
                                    <img src="http://localhost:3000/images/appleappstore.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <div className="inner_footer_bottom">
                    <p>Copyright &copy; 2024 Fortunaglobal Pvt.Ltd, All Right Reserved</p>
                </div>
            </div>

        </div>

    )
}

export default Footer