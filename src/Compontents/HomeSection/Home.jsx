import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useShoppingCart } from '../../context/ShoppingCartContext';

function Home() {
  const { currTime } = useShoppingCart()
  return (
    <div className='container'>
      <h1 className='clock'>{currTime}</h1>
      <section className="home">
        <div className="container">
          <h1>Welcome to Our Store</h1>
          <p>Upgrade your mobile experience with Lux Phones.
            Our high-end retail stores offer the latest and most advanced mobile devices,
            accessories Our personalized customer service
            and on-site device customization will ensure your satisfaction.
            Visit Lux Phones today for a superior shopping experience.</p>
          <Link to="/store"><button>Shop Now</button></Link>
        </div>
      </section>
    </div>
  );
}

export default Home;