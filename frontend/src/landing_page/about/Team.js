import React from 'react'

const Team = () => {
    return (
        <div className='container'>
            <div className='row text-center'>
                <h1 className='text-muted mb-5'>
                    people
                </h1>

            </div >
            <div className='row p-5'>

                <div className='col-6 p-5 text-center '>
                    <img className='image rounded rounded-circle w-50 mb-2' src="media/image/nithinKamath.jpg" alt="ceoPicture" />
                    <h2 className=''>Nithin Kamath</h2>
                    <p>
                        Founder, CEO
                    </p>
                </div>

                <div className='col-6' style={{
                    lineHeight:"30px"
                }}>
                    Today, Zerodha has changed the landscape of the Indian broking industry.<br />
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.<br />

                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). <br />

                    Playing basketball is his zen.<br />

                    Connect on Homepage / TradingQnA / Twitter

                </div>

            </div>

        </div>
    )
}

export default Team
