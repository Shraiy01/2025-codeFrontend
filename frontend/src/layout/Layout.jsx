import React, { useState } from 'react'
import BirthdayBanner from '../pages/BirthdayBanner'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'

export const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <BirthdayBanner />
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Outlet />
        </div>
    )
}
