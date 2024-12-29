import React from 'react';
import NavLinks from './NavLinks';

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex max-w-6xl mx-auto justify-center space-x-8">
      <NavLinks className="hover:text-pink-200 transition-colors" />
    </div>
  );
};

export default DesktopMenu;