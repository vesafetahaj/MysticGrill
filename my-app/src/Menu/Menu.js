import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Menu.css';
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
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
  };
  const galleryImages = [
    {
      original: 'image-url-1.jpg', // Replace with the actual image URL
      thumbnail: 'thumbnail-url-1.jpg', // Replace with the actual thumbnail URL
      description: 'Image 1', // Description for the image (optional)
    },
    {
      original: 'image-url-2.jpg',
      thumbnail: 'thumbnail-url-2.jpg',
      description: 'Image 2',
    },
    // Add more images as needed
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
      <section>
        <div className='scroll-image-container' onClick={scrollToMenu}>
          <img src={`${process.env.PUBLIC_URL}/images/IMG_4508.jpg`} alt="Scroll Image" />
          <div className="image-text">CHECK OUR MENU</div>
        </div>
      </section>
      <div id='menu'>
        <div className='menu-section'>
          <h2>APPETIZERS</h2>
          <div className='menu-grid'>
            <div className="menu-item">
              <div className="menu-header">
                <h4>Fried Spring Rolls</h4>
                <h4>$2.95</h4>
              </div>
              <p>Chicken or vegetable</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Tofu Tod</h4>
                <h4>$3.95</h4>
              </div>
              <p>fried tofu with a mild chili peanut sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Fried Tiger Shrimp Rolls</h4>
                <h4>$22</h4>
              </div>
              <p>with a plum sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Gai Of Nuur Satay</h4>
                <h4>$4.95</h4>
              </div>
              <p>skewered chicken or beef with a peanut sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Fresh Thai Summer Roll</h4>
                <h4>$4.50</h4>
              </div>
              <p>with shrimp in a tamarind sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Thai Spare Ribs</h4>
                <h4>$8.95</h4>
              </div>
              <p>glazed and grilled pork ribs</p>
            </div>
          </div>
        </div>
        <div className='menu-section'>
          <h2>ENTRÉES</h2>
          <div className='menu-grid'>
            <div className="menu-item">
              <div className="menu-header">
                <h4>Beef and Broccoli</h4>
                <h4>$8.50</h4>
              </div>
              <p>sauteed in oyster sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Chicken and Broccoli</h4>
                <h4>$7.95</h4>
              </div>
              <p>sauteed in oyster sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Gai Kratiam</h4>
                <h4>$7.95</h4>
              </div>
              <p>sauteed sliced chicken with broccoli, cabbage and onions in a fresh garlic sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Koong Kratiam</h4>
                <h4>$8.95</h4>
              </div>
              <p>sauteed shrimp with broccoli, cabbage, carrots and onions in a fresh garlic sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Pla Muk Kratiam</h4>
                <h4>$8.50</h4>
              </div>
              <p>sauteed squid with broccoli, cabbage, carrots and onions in a fresh garlic sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Thai Spare Ribs</h4>
                <h4>$8.95</h4>
              </div>
              <p>glazed and grilled pork ribs</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Nuur Kra Prow</h4>
                <h4>$8.90</h4>
              </div>
              <p>sauteed sliced beef with peppers, cabbage, carrots and onions in a chili basil sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Pla Muk Kra Prow</h4>
                <h4>$8.50</h4>
              </div>
              <p>sauteed squid with peppers, cabbage, carrots and onions in a chili basil sauce</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Gai Pad Khing</h4>
                <h4>$7.95</h4>
              </div>
              <p>sauteed sliced chicken with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce</p>
            </div>
          </div>
          <div className='menu-section' id='lastmenusection'>
          <h2>DESSERT</h2>
          <div className='menu-grid'>
            <div className="menu-item">
              <div className="menu-header">
                <h4>Fried Banana</h4>
                <h4>$7.50</h4>
              </div>
              <p>deep-fried banana topped with coconut ice cream</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Gelato</h4>
                <h4>$4.95</h4>
              </div>
              <p>seasonal flavor made in-house</p>
            </div>
            <div className='menu-item'>
              <div className="menu-header">
                <h4>Khao Neow Ma Muang</h4>
                <h4>$5.95</h4>
              </div>
              <p>sliced mango with sticky rice and coconut milk</p>
            </div>
            
          </div>
        </div>
        </div>
      </div>
     
       
    </div>
  );
}

export default Menu;
