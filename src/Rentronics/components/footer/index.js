const footer = () => {
    return (
        <>
            <div className="my-0 py-3 bg-light">
                <div className="container mt-3">
                    <div className="row mb-3">
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                            <h6>Rentronics</h6>
                            <ul className="no-bullet px-0">
                                <li><small className="text-muted">About Us</small></li>
                                <li><small className="text-muted">Contact</small></li>
                                <li><small className="text-muted">Career</small></li>
                            </ul>
                        </div>

                        <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                            <h6>Information</h6>
                            <ul className="no-bullet px-0">
                                <li><small className="text-muted">Blog</small></li>
                                <li><small className="text-muted">FAQs</small></li>
                            </ul>
                        </div>

                        <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                            <h6>Policies</h6>
                            <ul className="no-bullet px-0">
                                <li><small className="text-muted">Privacy Policy</small></li>
                                <li><small className="text-muted">Cancelation</small></li>
                                <li><small className="text-muted">Rental Terms and Conditions </small></li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-light border-top">
                <div className="container py-3 ">
                    <small className="text-muted">&copy; Copyright 2022, Rentronics</small>
                </div>
            </div>
        </>)
}

export default footer;