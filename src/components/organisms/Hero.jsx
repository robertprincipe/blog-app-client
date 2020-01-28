import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({cover, title}) => (
    <div className="hero">
        <img src={cover} alt="hero of the app"/>
        <h1>{ title }</h1>
    </div>
)

Hero.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string
}

Hero.defaultProps = {
    cover: 'https://images.unsplash.com/photo-1578241561880-0a1d5db3cb8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Welcome to my website'
}

export default Hero