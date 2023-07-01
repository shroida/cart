import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import ProductsItems from "../../data/ProductsItems.json";
function Home() {
  const { currTime } = useShoppingCart()
  return (
    <div >
      <h1 className='clock'>{currTime}</h1>
      <section className="container-home">
        <h1>Welcome to Our Store</h1>
        <div className="marquee-container">
          <div className="marquee">
            {ProductsItems.map((item) => {

              return <div className="marquee-item" key={item.id}>


                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
              </div>

            })}

          </div>
        </div>
        <Link to="/store"><button className='animated-button '>Shop Now</button></Link>

      </section>
    </div>
  );
}

export default Home;