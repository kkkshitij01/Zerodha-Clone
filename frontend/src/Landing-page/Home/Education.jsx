export default function Education() {
    return (
        <div className="container p-5" style={{ marginTop: "120px" }}>
            <div className="row">
                <div className="col">
                    <img src="media/images/education.svg" alt="varsit-png" style={{ width: "80%" }} />
                </div>
                <div className="col mt-5" style={{ lineHeight: "2", letterSpacing: "0.4px" }}>
                    <h4 className="mb-4"> Free and open market education </h4>
                    <p>Varsity, the largest online stock market education book in the world <br /> covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{ textDecoration: "none" }}>Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{ textDecoration: "none" }}>Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
    )
}