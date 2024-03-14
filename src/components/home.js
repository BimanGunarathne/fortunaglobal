import React from 'react'
import './home.scss'

function Home() {
    return (
        <div className='home'>
            <div className="top_banner">
                <img src="http://localhost:3000/images/image1.webp" alt="" />
            </div>
            <div className="mid_section1">
                <div className="row">
                    <div className='left col s12 m4 l3'>
                        <div className="categories">
                            <h2>Categories</h2>
                            <div className='categories_sec'>
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/electronics.svg" alt="" />
                                            <span>Electronics</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/digital.svg" alt="" />
                                            <span>Digital</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/mobile.svg" alt="" />
                                            <span>Mobile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/computers.svg" alt="" />
                                            <span>Computers</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/laptops.svg" alt="" />
                                            <span>Laptops</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/fashion.svg" alt="" />
                                            <span>Fashion</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/accessories.svg" alt="" />
                                            <span>Accessories</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/watch.svg" alt="" />
                                            <span>Watch</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://localhost:3000/images/travel.svg" alt="" />
                                            <span>Travel</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="locations">
                            <h2>Locations</h2>
                            <div className='locations_sec'>
                                <ul>
                                    <li>
                                        <a href="">
                                            <span>All of Sri Lanka</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>Ampara</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>Anuradhapura</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>Badulla</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>Batticaloa</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>Colombo</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>Galle</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='right col s12 m8 19'>
                        <h2>FORTUNA MALL</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home