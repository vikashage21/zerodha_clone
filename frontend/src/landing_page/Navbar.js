import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container p-2">
                    <div className="row">

                        <div className="col">
                            <Link to={"/"}>
                                <img src="media/image/logo.svg" style={{ width: "30%" }} alt="logo" />
                            </Link>
                        </div>

                        <div className="col">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link to={'/signup'} className="nav-link active text-muted mx-2" >signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/about"} className="nav-link active text-muted  mx-2" > About </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/product"} className="nav-link active text-muted  mx-2"  > product </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/support"} className="nav-link active text-muted  mx-2" > support </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/pricing"} className="nav-link active text-muted  mx-2" > pricing </Link>
                                </li>



                            </ul>

                        </div>


                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar
