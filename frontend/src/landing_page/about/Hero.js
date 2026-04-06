import React from "react";

const Hero = () => {
    return (
        <div className="container text-center p-5 mt-2 ">
            <div className="row border-bottom pb-5">
                <h1 className="fs-4 p-5" style={{
                    lineHeight:"32px"
                }}>
                    We pioneered the discount broking model in India.
                    <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>

            {/* other sections */}

            <div className="row">
                <div className="col-6 p-5 fs-6" style={{
                    lineHeight:'32px'
                }}>
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal
                        of breaking all barriers that traders and investors face in India in
                        terms of cost, support, and technology. We named the company
                        Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
                        barrier.<br />
                        Today, our disruptive pricing models and in-house
                        technology have made us the biggest stock broker in India.<br />
                        Over 1.6+
                        crore clients place billions of orders every year through our
                        powerful ecosystem of investment platforms, contributing over 15% of
                        all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-6 mt-2 p-5 fs-6"
                style={{
                    lineHeight:'32px'
                }}>
                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.<br />

                    Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.<br />

                    And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                </div>
            </div>
        </div>
    );
};

export default Hero;
