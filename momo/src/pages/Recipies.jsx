import React, { useState } from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import './Recipies.css';
import Momo1 from "../Image/CMomo.png";
import MOmo2 from "../Image/SteamMomo.png";
import MOmo3 from "../Image/FryMomo.png";

const Recipies = () => {
  const [selectedCategory, setSelectedCategory] = useState('Buff');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Dummy item data for demonstration
  const itemData = [
    {
      id: 1,
      title: 'Buff Item 1',
      image: Momo1,
      price: '10.99',
      category: 'Buff'
    },
    {
      id: 2,
      title: 'Buff Item 2',
      image: MOmo2,
      price: '12.99',
      category: 'Buff'
    },
    {
      id: 3,
      title: 'Buff Item 3',
      image: MOmo3,
      price: '12.99',
      category: 'Buff'
    },
    {
      id: 4,
      title: 'Chicken Item 1',
      image: Momo1,
      price: '12.99',
      category: 'Chicken'
    },
    {
      id: 5,
      title: 'Chicken Item 2',
      image: MOmo2,
      price: '12.99',
      category: 'Chicken'
    },
    {
      id: 6,
      title: 'Chicken Item 3',
      image: MOmo3,
      price: '12.99',
      category: 'Chicken'
    },
    {
      id: 7,
      title: 'Veg Item 1',
      image: Momo1,
      price: '12.99',
      category: 'Veg'
    },
    {
      id: 8,
      title: 'Veg Item 2',
      image: MOmo2,
      price: '12.99',
      category: 'Veg'
    },
    {
      id: 9,
      title: 'Veg Item 3',
      image: MOmo3,
      price: '12.99',
      category: 'Veg'
    }
  ];

  // Filter items based on selected category
  const filteredItems = itemData.filter(item => item.category === selectedCategory);

  return (
    <div className='recipe-section'>
      <div className='recipe-container'>
        <div>
          <h1 className='recipe-title'>Our <span className='recipe-highlight'> Most Popular</span> Recipes </h1>
          <p className='recipe-subtitle'>Browse through a variety of recipes with fresh ingredients selected only from the best places</p>
        </div>
        <div>
          <div className='button-container'>
            <button
              type='button'
              className={`recipe-button ${selectedCategory === 'Buff' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Buff')}
            >
              Buff
            </button>
            <button
              type='button'
              className={`recipe-button ${selectedCategory === 'Chicken' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Chicken')}
            >
              Chicken
            </button>
            <button
              type='button'
              className={`recipe-button ${selectedCategory === 'Veg' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Veg')}
            >
              Veg
            </button>
          </div>
        </div>
        <div className='item-container'>
          {/* Render filtered items based on selectedCategory */}
          {filteredItems.map(item => (
            <div key={item.id} className="border-2 border-gray-200 pb-6 md:w-[20rem] rounded-lg sm:w-full">
              <div className="flex justify-center items-center">
                <div className="">
                  <img src={item.image} alt={item.title}></img>
                </div>
              </div>
              <div className="text-center mt-2 mb-2">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p>
                  रु <span className="text-2xl font-bold text-ownColor">{item.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="explore-button">
          <button className="explore-food-button" type="button">
            Explore more food <CiLocationArrow1 className="explore-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
