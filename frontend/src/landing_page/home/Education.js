import React from 'react'

const Education = () => {
    return (
        <div className="container p-5 mt-3">
            <div className="row">
                <div className="col">

                    <img src='media/image/education.svg'></img>

                </div>
                <div className="col">

                    <h2 className="fs-5 mb-3">
                        Free and open market education
                    </h2>
                    <p className="text-muted mt-2">
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>


                    <a href="" style={{ textDecoration: "none" }} > verify <i class="fa-solid fa-arrow-right"></i></a>


                    <p className="text-muted">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>


                    <a href="" style={{ textDecoration: "none" }} > TrandingQ&A <i class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>




        </div>
    )
}

export default Education
