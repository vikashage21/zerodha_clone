import React from 'react'

const Pricing = () => {
    return (
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col">
                    <h1 className="mb-3">
                        Unbeatable pricing
                    </h1>


                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.

                    </p>
                    <a href="" style={{ textDecoration: "none" }} > Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col">
                </div>
                <div className="col">
                    <div className='row'>
                        <div className='col'>
                            <img style={{ width: "80%" }} src="media/image/pricingEquity.svg" alt="pricing" />
                        </div>
                        <div className='col'>
                            <img style={{ width: "80%" }} src="media/image/pricing0.svg" alt="pricing" />
                        </div><div className='col'>
                            <img style={{ width: "80%" }} src="media/image/intradayTrades.svg" alt="pricing" />
                        </div>



                    </div>


                </div>
            </div>



        </div>
    )
}

export default Pricing
