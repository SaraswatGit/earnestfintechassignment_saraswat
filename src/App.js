import React from "react";
import logo from "./Assets/logo.png"; // Tell webpack this JS file uses this image
import clothes from "./Assets/clothes.jpg";
import ecommerce from "./Assets/ecommerce.png";
import food from "./Assets/food.jpeg";
import grocery from "./Assets/grocery.jpg";
import travel from "./Assets/travel.jpg";
import wellness from "./Assets/wellness.jpg";
import accessories from "./Assets/accessories.jpeg";
import electronics from "./Assets/electronics.jpg";
import section4card1 from "./Assets/section4card1.png";
import section2card1 from "./Assets/section2card1.png";
import section2card3 from "./Assets/section2card3.png";

import section4card3 from "./Assets/section4card3.jpg";
import section4card4 from "./Assets/section4card4.jpg";
import section4card5 from "./Assets/section4card5.jpg";
import section4card6 from "./Assets/section4card6.jpg";
import section4card2 from "./Assets/section4card2.svg";
import appstore from "./Assets/appstore.png";
import googleplay from "./Assets/googleplay.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./App.css";

import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img
          src={logo}
          style={{
            height: "2.2vw",
            width: "2.2vw",
            position: "absolute",
            marginLeft: "-65vw",
          }}
          alt="logo"
        />

        <div className="element">Locate Nearby</div>
        <div className="element">Gift Cards</div>
        <div className="element">Earn Cashback</div>

        <input type="search" className="navsearchbar" placeholder="Search..." />
      </div>
      <div style={{ marginTop: "5vw" }}>
        <Carousel
          showArrows={true}
          style={{ marginTop: "3vw", zIndex: "-1" }}
          autoPlay={true}
          infiniteLoop={true}
        >
          <div>
            <div className="slide1"></div>
          </div>
          <div>
            <div className="slide2"></div>
          </div>
          <div>
            <div className="slide3"></div>
          </div>
        </Carousel>
      </div>
      <div className="whatscool">
        <div className="coolheading">Checkout what's cool about us</div>
        <br />

        <div className="coolsections">
          <div className="coolelement">
            <img src={section2card1} className="imgdesc" alt="logo" />
            <br />
            <div className="cooldesc">Gift cards from 350+ brands</div>
            <div className="bluebutton">Buy Gift Card</div>
          </div>
          <div className="coolelement">
            <img src={section4card2} className="imgdesc" alt="logo" />
            <br />
            <div className="cooldesc">Unbeatable Cashback</div>{" "}
            <div className="bluebutton">Get Cashback</div>
          </div>
          <div className="coolelement">
            {" "}
            <img src={section2card3} className="imgdesc" alt="logo" />
            <br />
            <div className="cooldesc">Product Comparision</div>{" "}
            <div className="bluebutton">Compare Now</div>
          </div>
        </div>
      </div>
      <div className="whatscool">
        <div className="coolheading">Gift Card Category</div>
        <br />

        <div className="giftcardsection">
          <div className="cardelement">
            {" "}
            <img src={ecommerce} className="imgdesc" alt="logo" />
            <br />
            <div>E-Commerce</div>
          </div>
          <div className="cardelement">
            <img src={food} className="imgdesc" alt="logo" />
            <br />

            <div>Food</div>
          </div>
          <div className="cardelement">
            <img src={accessories} className="imgdesc" alt="logo" />
            <br />

            <div>Accessories</div>
          </div>
          <div className="cardelement">
            <img src={clothes} className="imgdesc" alt="logo" />
            <br />

            <div>Apparels</div>
          </div>
          <div className="cardelement">
            <img src={grocery} className="imgdesc" alt="logo" />
            <br />

            <div>Grocery</div>
          </div>
          <div className="cardelement">
            <img src={travel} className="imgdesc" alt="logo" />
            <br />

            <div>Travel</div>
          </div>
          <div className="cardelement">
            <img src={wellness} className="imgdesc" alt="logo" />
            <br />
            <div>Wellness</div>
          </div>
          <div className="cardelement">
            <img src={electronics} className="imgdesc" alt="logo" />
            <br />

            <div>Electronics</div>
          </div>
        </div>
      </div>
      <div className="whatscool">
        <div className="coolheading">Key Features</div>
        <br />
        <div className="keyfeaturessection">
          <div className="keyfeatureselement">
            <img src={section4card1} className="imgdesc2" alt="logo" />
            <br />
            <div className="fontstyle1">Discounts throughout the year</div>
          </div>
          <div className="keyfeatureselement">
            <img src={section4card2} className="imgdesc2" alt="logo" />
            <br />
            <div className="fontstyle1">
              Addition Discounts over brand discounts
            </div>
          </div>
          <div className="keyfeatureselement">
            <img src={section4card3} className="imgdesc2" alt="logo" />
            <br />
            <div className="fontstyle1">No Card Limits</div>
          </div>
          <div className="keyfeatureselement">
            <img src={section4card4} className="imgdesc2" alt="logo" />
            <br />
            <div className="fontstyle1">Pay exact amount you want to spend</div>
          </div>
          <div className="keyfeatureselement">
            <img src={section4card5} className="imgdesc2" alt="logo" />
            <br />
            <div className="fontstyle1">0 % convinience fee</div>
          </div>
          <div className="keyfeatureselement">
            <img src={section4card6} className="imgdesc2" alt="logo" />
            <br />
            <div className="fontstyle1">No Hidden Charges</div>
          </div>
        </div>
      </div>
      <div className="whatscool">
        <div className="coolheading">What do we offer ?</div>
        <br />
        <div className="keyfeaturessection">
          <div className="offerelements">
            <img src={section4card1} className="imgdesc3" alt="logo" />
            <br />
            <div className="fontstyle2">
              Unlimited Discounts offers throughout the year
            </div>
          </div>
          <div className="offerelements">
            <img src={section4card2} className="imgdesc3" alt="logo" />
            <br />
            <div className="fontstyle2">
              Addition Discounts over brand discounts with no hidden charges
            </div>
          </div>
          <div className="offerelements">
            <img src={section2card1} className="imgdesc3" alt="logo" />
            <br />
            <div className="fontstyle2">
              Gift cards for 300 + brands as well as product comparision
            </div>
          </div>
          <div className="offerelements">
            <img src={section4card4} className="imgdesc3" alt="logo" />
            <br />
            <div className="fontstyle2">
              Pay exact amount you want to spend and no hidden charges
            </div>
          </div>
          <div className="offerelements">
            <img src={section4card6} className="imgdesc3" alt="logo" />
            <br />
            <div className="fontstyle2">
              0 % convinience fee and pay the exact amount
            </div>
          </div>
          <div className="offerelements">
            <img src={section4card2} className="imgdesc3" alt="logo" />
            <br />
            <div className="fontstyle2">
              No Hidden Charges and unbeatable cashbacks
            </div>
          </div>
        </div>
      </div>
      <div className="whatscool">
        <div className="coolheading">How MeriBachat Works ?</div>
        <br />
        <div className="worksections">
          <div className="worksectionitem">
            <div className="fontstyle3">01</div>
            <div className="fontstyle4">
              Check the links on our site online on your device
            </div>
          </div>
          <div className="worksectionitem">
            <div className="fontstyle3">02</div>
            <div className="fontstyle4">
              Choose the best option for you and select it
            </div>
          </div>{" "}
          <div className="worksectionitem">
            <div className="fontstyle3">03</div>
            <div className="fontstyle4">
              Click on get cashback button to avail the cashback
            </div>
          </div>{" "}
          <div className="worksectionitem">
            <div className="fontstyle3">04</div>
            <div className="fontstyle4">
              Cashback will be credited to your MB Wallet
            </div>
          </div>
        </div>
      </div>
      <div className="lastsection">
        <div className="lastsectioncolumns">
          <div className="fontstyle5">Home</div>
          <div className="fontstyle5">About Us</div>
          <div className="fontstyle5">Contact Us</div>
          <div className="fontstyle5">Privacy</div>
          <img src={appstore} className="logos" alt="logo" />
        </div>
        <div className="lastsectioncolumns">
          <div className="fontstyle5">Terms and Condtions</div>
          <div className="fontstyle5">Help and Support</div>
          <div className="fontstyle5">FAQ</div>
          <div className="fontstyle5">Blogs</div>
          <img src={googleplay} className="logos" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
