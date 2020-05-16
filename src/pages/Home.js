import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'


function Home() {
    return (
        <React.Fragment>
        <Hero>
            <Banner title="luxurious rooms" subtitle="Delux Rooms Starting at Rs 2000">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home