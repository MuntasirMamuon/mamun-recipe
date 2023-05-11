import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    

    <footer className="bg-gray-900 text-gray-500 px-20 text-center">
      <div className="mx-auto py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">Thai and India cuisine are both known for their unique flavors and ingredients. Thai food is characterized by its use of herbs and spices like lemongrass and kaffir lime leaves, while Chinese cuisine features regional diversity and savory flavors from ingredients such as soy sauce and five spice powder. Both types of cuisine are popular worldwide for their delicious and diverse dishes.</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="tel:+123456789" className="hover:text-white">+880 178 80943791</a></li>
              <li className="mb-2"><a href="mailto:info@example.com" className="hover:text-white">mdmuntasirmamun63@gmail.com</a></li>
              <li className="mb-2"><a href="https://goo.gl/maps/rus5PsmaKz7pXSwN8?coh=178573&entry=tt" className="hover:text-white">Our Location</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
            <ul className="list-none">
              <li className="mb-2"><Link to="/home" className="hover:text-white">Home</Link></li>
              <li className="mb-2"><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li className="mb-2"><Link to="/login" className="hover:text-white">Login</Link></li>
              <li className="mb-2"><Link to="/register" className="hover:text-white">Register</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm">&copy; 2023 My Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
