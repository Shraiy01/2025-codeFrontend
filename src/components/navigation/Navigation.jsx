import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-pink-600 text-white p-[1.5rem] relative">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden absolute left-4 top-4 z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <DesktopMenu />
    </nav>
  );
};

export default Navigation;