import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className={`
      md:hidden fixed inset-0 bg-pink-600 z-10 transform transition-transform duration-300
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <NavLinks 
          className="text-xl hover:text-pink-200 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </div>
  );
};

export default MobileMenu;