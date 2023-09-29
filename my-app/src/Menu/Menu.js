import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Menu.css';
import Footer from '../Footer/Footer';

function Menu() {
  const dishes = [
    {
      name: 'mixed salad topped with fried salmon',
      imageSrc: `${process.env.PUBLIC_URL}/images/dish1.jpg`,
    },
    {
      name: 'healthy salad with tomatoes',
      imageSrc: `${process.env.PUBLIC_URL}/images/dish2.jpg`,
    },
    {
      name: 'meatball plate garnished with tomato sauce',
      imageSrc: `${process.env.PUBLIC_URL}/images/dish3.jpg`,
    },
    {
      name: 'penne pasta cooked with tomato sauce',
      imageSrc: `${process.env.PUBLIC_URL}/images/dish4.jpg`,
    },
  ];

  return (
    <div className="Menu">
      <div className='MenuNav'>
        </div>
      <div className="flex-container">
        
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={3000} // Set the interval to control slide speed (in milliseconds)
          transitionTime={500} // Set the transition time for the fade effect (in milliseconds)
          transitionTimeUnit="ms" // Set the unit for transition time (ms or s)
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/restaurant-interior.jpg`}
              alt="Slider Image 1"
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/slider-image2.jpg`}
              alt="Slider Image 2"
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/slider-image3.jpg`}
              alt="Slider Image 3"
            />
          </div>
        </Carousel>
      </div>
      <section>
      <div className='desc'>
          <p>Our food menus are tailored appropriately to season and availbity. Changing daily, we use the highest quality of produce, cooked with care.
          <br></br><br></br>
          Our wine list has a focus on European producers alongside a smattering from the new world. We work with wine makers who produce high quality wine with minimal intervention - ranging from classics to the unusual.
          <br></br><br></br>
          The beer list is dominated by British breweries, particularly those from the thriving London scene. We work closely with five points brewery who produce our house pale ale 'So Solid Brew'
          <br></br><br></br>
          For group bookings of 7+ please see our set menu below. This changes seasonally and showcases the best of our a la carte offering.</p>
        </div>
      </section>
      <hr></hr>
      <section>
        <h1 id='dishes'>Some of our famous Dishes</h1>
        <div className="card-container">
          {dishes.map((dish, index) => (
            <div className="card" key={index}>
              <img
                src={dish.imageSrc}
                alt={dish.name}
                className="card-image"
              />
              <div className="card-content">
                <h3>{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
