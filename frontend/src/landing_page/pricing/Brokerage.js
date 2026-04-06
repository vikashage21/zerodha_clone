import React from 'react'

const Brokerage = () => {
    return (
        <div className='container'>

            <div className="row text-center">
                <div className="col-4 p-5">
                    <img src="media/image/pricing0.svg" alt="" />
                    <p className="fs-3">Free equity delivery</p>
                    <p className="text-muted fs-6">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/image/intradayTrades.svg" alt="" />
                    <p className="fs-3">Intraday and F&O trades</p>
                    <p className="text-muted fs-6">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/image/pricing0.svg" alt="" />
                    <p className="fs-3">Free direct MF</p>
                    <p className="text-muted fs-6">
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>

            {/* Table */}
            <div className="my-4">
                <h3 className="mb-3 text-center">Brokerage Charges</h3>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>Charges</th>
                                <th>Equity Delivery</th>
                                <th>Equity Intraday</th>
                                <th>F&O - Futures</th>
                                <th>F&O - Options</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>Brokerage</th>
                                <td>Zero Brokerage</td>
                                <td>0.03% or ₹20/order</td>
                                <td>0.03% or ₹20/order</td>
                                <td>Flat ₹20 per order</td>
                            </tr>

                            <tr>
                                <th>STT/CTT</th>
                                <td>0.1% buy & sell</td>
                                <td>0.025% sell side</td>
                                <td>0.05% sell side</td>
                                <td>
                                    0.15% (intrinsic on exercise)<br />
                                    0.15% on sell premium
                                </td>
                            </tr>

                            <tr>
                                <th>Transaction Charges</th>
                                <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                <td>NSE: 0.00183%<br />BSE: 0</td>
                                <td>
                                    NSE: 0.03553%<br />
                                    BSE: 0.0325%
                                </td>
                            </tr>

                            <tr>
                                <th>GST</th>
                                <td colSpan="4">
                                    18% on (brokerage + SEBI + transaction charges)
                                </td>
                            </tr>

                            <tr>
                                <th>SEBI Charges</th>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>

                            <tr>
                                <th>Stamp Charges</th>
                                <td>0.015% (buy)</td>
                                <td>0.003% (buy)</td>
                                <td>0.002% (buy)</td>
                                <td>0.003% (buy)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mt-3 text-muted text-center">
                    Calculate your costs upfront using our brokerage calculator.
                </p>
            </div>
        </div>
    )
}

export default Brokerage