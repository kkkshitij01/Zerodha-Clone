export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom fixed-top " style={{ backgroundColor: "white" }}>
            <div className="container p-2">
                <a className="navbar-brand" href="#">
                    <img src="media/images/logo.svg" alt="logo" style={{ width: "20%", marginLeft: "60px" }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex" role="search">
                        <ul className="navbar-nav  mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Support</a>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}
