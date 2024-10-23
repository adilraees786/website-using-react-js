import React from 'react'
import Navbar from '../components/Navbar'

export default function About(){
    return(
        
        <div>
            <Navbar/>
            <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <img
            src="https://png.pngtree.com/element_our/png/20180918/chef-cooking-fried-chicken-and-delicious-sign-png_103460.jpg"
            alt="Our Restaurant"
            className="w-full h-100 rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Welcome to [Restaurant Name]! Founded in [Year], our restaurant has been serving delicious meals made with the freshest ingredients. Our passion for food drives us to create a memorable dining experience for our guests.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide exceptional food and service, creating a welcoming environment for everyone. We believe in sustainable practices and supporting local farms.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Chef</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <img
              src="path/to/your/image2.jpg"
              alt="Chef"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-gray-700">
              Chef [Name] brings over [X] years of culinary experience, having trained in some of the finest kitchens. Their passion for creating unique flavors is reflected in our menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  
         
        </div>
    )
    
}
