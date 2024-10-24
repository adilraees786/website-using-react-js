import React from 'react';

const MenuCard = ({ dishName, description, price, imgUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out p-5 m-5 max-w-sm">
      <img src={imgUrl} alt={dishName} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-2xl font-bold text-gray-800 mt-3">{dishName}</h2>
      <p className="text-gray-600 my-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold text-gray-700">${price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Order Now</button>
      </div>
    </div>
  );
};

export default MenuCard;
