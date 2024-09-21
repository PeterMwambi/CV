import React from 'react'
import computer6 from 'assets/computer3.jpg';
import HeaderBody from 'components/headerbody';
import { MainNavigation as Navbar } from 'components/navbar'


const Header = () => {
    return (
        <header id="dpz__header" style={{ '--header-bg-image': `url(${computer6})` }}>
            <Navbar />
            <HeaderBody />
        </header>
    )
}


export default Header;