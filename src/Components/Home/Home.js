import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="/"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver"
            price={965.08}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71S4sIPFvBL._AC_SX342_.jpg"
          />
          <Product
            id="12321342"
            title="Kitchen in the box Stand Mixer, 4.5QT+5QT Two bowls Electric Food Mixer, 10 Speeds 3-IN-1 Kitchen Mixer for Daily Use with Egg Whisk,Dough Hook,Flat Beater (Blue)"
            price={153.59}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61NKY2T-MTL._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321343"
            title="Jennyfly Men Watch Bands for Fitbit Charge 4/Charge 3/3 SE, Large Size Soft Sweatproof Silicone Sport Strap Replacement Waterproof Wristband Adjustable 7.1-8.7 inch - Coffee"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51HfAlmkVUL._AC_SY450_.jpg"
          />
          <Product
            id="12321344"
            title="Echo Dot (5th Gen, 2022 release) Kids | Designed for kids, with parental controls | Owl"
            price={27.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51+HSOOoOQL._AC_SY450_.jpg"
          />
          <Product
            id="12321345"
            title="Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Space Gray"
            price={1077.5}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81c+9BOQNWL._AC_SX342_SY445_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321346"
            title="SAMSUNG 49' S95UA Super Ultrawide Dual QHD Monitor, 4ms, QLED, HDR400, USB-C, USB Hub, 120Hz, Height Adjustable Stand, LS49A950UINXZA, 2022, Charcoal Black"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81WWFZa7shL._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321347"
            title="Pivo Pod Influencer Phone Mount, Auto Face Tracking Tripod, 360° Rotation, Content Creator Essentials, Vlogging, Streaming, Portable, Rechargeable, Wireless, Compatible with iPhone and Android"
            price={11.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61L9XUdiqgL._AC_SX466_.jpg"
          />
          <Product
            id="123213401"
            title="ATUAT AirPods 3 Case, Protective Silicone Cover for AirPods 3rd Generation Case 2021, Wireless Charging - Black"
            price={10.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61QKApmZyqL._AC_SX425_.jpg"
          />
          <Product
            id="123213415"
            title="Margaritaville Tiki Torch - Waterproof Bluetooth Speaker, Portable Party Speaker with Flickering LED Lights, Perfect for Travel, Parties, Yards, and Pools (2 Pack)"
            price={45.49}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Z34ZlQhzL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
