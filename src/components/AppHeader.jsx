import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Navbar from './Navbar'
import Search from './Search'

const links = [
    {title: 'Home', url: ''},
    {title: 'Services', url: ''},
    {title: 'About us', url: ''},
    {title: 'Contact', url: ''},
]

export default function AppHeader() {
    return (
        <header className="page-header">
            <Container>
                <div className='page-header-content'>
                  <Logo />
                  <Search />
                  <Navbar links={ links } />
                </div>
            </Container>
        </header>
    )
}
