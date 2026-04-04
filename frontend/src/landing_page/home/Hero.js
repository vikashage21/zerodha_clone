import React from 'react'

const Hero = () => {
    return (
        <div className='container'>
            <div className="row text-center">
                <img src='media/image/homeHero.png' className='mb-5' alt='hero img'></img>
                <h1>invest in everything</h1>
                <p>online platform to invert in stock , derivatives , mutual funds , and more</p>
                <button className="btn btn-primary text-white p-2 fs-6" style={{ "width": "20%", "margin": "auto" }}>
                    signup now
                </button>
            </div>
        </div>
    )
}

export default Hero
