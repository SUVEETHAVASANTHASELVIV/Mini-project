import React, { useState } from 'react';
import ChefSpeechBubble from './ChefSpeechBubble';

const CategoryCard = ({ category, setSelectedCategory, sortedItems, menuItems }) => {
  const [favorites, setFavorites] = useState([]);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleFavorite = (item) => {
    if (favorites.includes(item.id)) {
      setFavorites(favorites.filter(fav => fav !== item.id));
    } else {
      setFavorites([...favorites, item.id]);
    }
  };
  // const handleReviewSubmit = () => {
  //   setReviews([...reviews, { text: review, date: new Date().toLocaleDateString() }]);
  //   setReview('');
  // };
  const items = sortedItems(menuItems.filter(item => item.category === category.name));

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="flex justify-center">
      <ChefSpeechBubble/>
        {/* <img src={pic} alt="Chef" className="h-16 mb-4 rounded-full transition-transform transform scale-110 duration-500" /> */}
      </div>
      <h2 className="text-center text-lg font-bold mb-4">{category.name}</h2>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
            <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full" />
            <p className="flex-1 text-gray-700 ml-4">{item.name}</p>
            <span className="font-semibold text-orange-600">${item.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500">⭐ {item.rating}</span>
            <button
              onClick={() => handleFavorite(item)}
              className={`ml-2 p-1 rounded-full ${favorites.includes(item.id) ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
              {favorites.includes(item.id) ? '★' : '☆'}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setSelectedCategory(null)}
        className="mt-4 p-2 w-full bg-orange-500 text-white rounded-lg hover:bg-orange-600"
      >
        Back to Categories
      </button>

      
    </div>
  );
};

export default CategoryCard;
