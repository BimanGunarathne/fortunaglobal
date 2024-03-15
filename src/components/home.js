import React from 'react'
import './home.scss'
import { Tab, Tabs } from 'react-bootstrap'
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
                    <div className='right col s12 m4 l8'>
                        <div className='fortunamall'>
                            <h2>FORTUNA MALL</h2>
                            <div className="main_categories_sec">
                                <div className='main_cats col s1' id='col1'>
                                    <div className="div_image">
                                        <img className='div_main_img' src="http://localhost:3000/images/madeinsrilanka.webp" alt="" />
                                    </div>
                                    <div className='div_cat'>
                                        <h3>MED IN<br />SRILANKA</h3>
                                        <a href="">
                                            <span>Shop now<img className='arrow_button' src="http://localhost:3000/images/right-arrow-button.svg" alt="" /></span>
                                        </a>
                                    </div>
                                </div>
                                <div className='main_cats col s1' id='col2'>
                                    <div className='div_image'>
                                        <img className='div_main_img' src="http://localhost:3000/images/Grosery.webp" alt="" />
                                    </div>
                                    <div className='div_cat'>
                                        <h3>FOOD AND<br />BEVERAGE</h3>
                                        <a href="">
                                            <span>Shop now<img className='arrow_button' src="http://localhost:3000/images/right-arrow-button.svg" alt="" /></span>
                                        </a>
                                    </div>
                                </div>
                                <div className='main_cats col s1' id='col3'>
                                    <div className='div_image'>
                                        <img className='div_main_img' src="http://localhost:3000/images/beauty.webp" alt="" />
                                    </div>
                                    <div className='div_cat'>
                                        <h3>HEALTH AND<br />BEAUTY</h3>
                                        <a href="">
                                            <span>Shop now<img className='arrow_button' src="http://localhost:3000/images/right-arrow-button.svg" alt="" /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item_grid_1">
                            <Tabs
                                defaultActiveKey="Electronics"
                                id='fill-tab-example'
                                className='mb-3'
                                fill
                            >
                                <Tab eventKey="Electronics" title="Electronics">
                                    <div className='main_item_grid'>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className='item_image'>
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Headphones</span>
                                            <p>White Solor 2 Wireless</p>
                                            <div className='item_image'>
                                                <img src="http://localhost:3000/images/headphone.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>85,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className="item_image">
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className="item_image">
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className="item_image">
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>

                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='main_item_grid'>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className='item_image'>
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Headphones</span>
                                            <p>White Solor 2 Wireless</p>
                                            <div className='item_image'>
                                                <img src="http://localhost:3000/images/headphone.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>85,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className="item_image">
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className="item_image">
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>
                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='first_item col s1'>
                                            <span>Laptops, Ultrabooks</span>
                                            <p>Tablet Red EliteBook Revolve</p>
                                            <div className="item_image">
                                                <img src="http://localhost:3000/images/TabletRedEliteBookRevolve.webp" alt="" />
                                            </div>

                                            <div className='price_button'>
                                                <span>17,500.00 LKR</span>
                                                <div className='basket_icon'>
                                                    <a href="">
                                                        <img src="http://localhost:3000/images/basket.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Camerasandaccessories" title="Cameras & Accessories">

                                </Tab>
                                <Tab eventKey="Otherelectronics" title="Other Electronics">

                                </Tab>
                            </Tabs>
                        </div>
                        <div className="item_grid_2">
                            <div className='grid2_left_col col s12 m6 l3'>
                                <div className='detail_top_left'>
                                    <span>Hich Tech News</span>
                                    <h3>Monster Beats <br /> Headphones</h3>
                                    <button>READ MORE</button>
                                </div>
                                <div className='image_headphone'>
                                    <img src="http://localhost:3000/images/blueheadphone.webp" alt="" />
                                </div>
                            </div>
                            <div className="grid2_mid_col col s12 m4 l8">
                                <div className="row_top">
                                    <div className="detail_top_midtop">
                                        <span>Hich Tech News</span>
                                        <h3>Apple iPhone 13 <br /> Color Red</h3>
                                    </div>
                                    <div className="image_iphone">
                                        <img src="http://localhost:3000/images/iPhone12.webp" alt="" />
                                    </div>
                                </div>
                                <div className="row_bottom">
                                    <div className="detail_bottom_midbot">
                                        <span>Hich Tech News</span>
                                        <h3>Music Makes <br /> Feel Better</h3>
                                    </div>
                                    <div className="speaker_image">
                                        <img src="http://localhost:3000/images/minimalspeaker.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid2_right_col col s12 m4 l2">
                                <div className="detail_lef_leftcol">
                                    <span>Hich Tech News</span>
                                    <h3>Apple <br />iwatch Nike <br />Edition</h3>
                                    <button>WATCH DEMO</button>
                                </div>
                                <div className="iwatch_image">
                                    <img src="http://localhost:3000/images/iWatch.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home