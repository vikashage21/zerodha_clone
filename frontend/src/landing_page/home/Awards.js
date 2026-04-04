import React from 'react'

const Awards = () => {
    return (
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-6 mb-5 ">
                    <img src="media/image/largestBroker.svg" alt="largestBroker"></img>
                </div>
                <div className="col-6 mt-5" >
                    <h1>
                        Largest stock broker in India
                    </h1>
                    <p>
                        2+ million Zerodha client contribute to over 15% fo all retail order volumes in india daily by trading and investing in :
                    </p>

                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li>futures and options</li>
                                <li>trading stock</li>
                                <li>commodity derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stock & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img src="media/image/pressLogos.png" className='mt-2' alt="press img" style={{width :"90%"}}/>

                        </div>

                </div>
            </div>



        </div>
    )
}

export default Awards
