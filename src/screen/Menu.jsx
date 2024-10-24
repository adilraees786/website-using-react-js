import React from 'react';
import MenuCard from './Menucard';

function App() {
  const menuItems = [
    {
      dishName: "Spaghetti Carbonara",
      description: "Classic Italian pasta with creamy sauce and crispy pancetta.",
      price: "12.99",
      imgUrl: "https://source.unsplash.com/600x400/?pasta"
    },
    {
      dishName: "Margherita Pizza",
      description: "Wood-fired pizza with fresh tomatoes, mozzarella, and basil.",
      price: "10.99",
      imgUrl: "https://source.unsplash.com/600x400/?pizza"
    },
    {
      dishName: "Caesar Salad",
      description: "Fresh romaine lettuce, parmesan cheese, and Caesar dressing.",
      price: "8.99",
      imgUrl: "https://source.unsplash.com/600x400/?salad"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center items-center p-10">
      {menuItems.map((item, index) => (
        <MenuCard
          key={index}
          dishName={item.dishName}
          description={item.description}
          price={item.price}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  );
}

export default App;
