import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/photo-gallery', text: 'Photo Gallery' },
  { to: '/love-story', text: 'Our Love Story' },
  { to: '/why-i-love-you', text: 'Why I Love You' },
  {to:'/love-quiz', text:'Love Quix'} 
];

const NavLinks = ({ className, onClick }) => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={className}
          onClick={onClick}
        >
          {link.text}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;