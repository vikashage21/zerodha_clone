import React from 'react'

const CreateTicket = () => {
    return (
        <div className="container my-5">

            {/* Header */}

            {/* Search + Tickets */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <h5>My Tickets</h5>
                </div>

                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                    />
                </div>
            </div>

            {/* Updates Section */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card p-3 shadow-sm">
                        <h6 className="fw-bold">Latest Updates</h6>
                        <ul className="mb-0">
                            <li>Latest Intraday leverages and Square-off timings</li>
                            <li>Current Takeovers and Delisting – April 2026</li>
                        </ul>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-md-6">
                    <div className="card p-3 shadow-sm">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">1. Track account opening</a></li>
                            <li><a href="#">2. Track segment activation</a></li>
                            <li><a href="#">3. Intraday margins</a></li>
                            <li><a href="#">4. Kite user manual</a></li>
                            <li><a href="#">5. Learn how to create a ticket</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateTicket
