export default function Pricing() {
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-5">Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{ textDecoration: "none" }}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border p-4 ">
                            <h1>₹0</h1>
                            <p className="text-muted">Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        <div className="col border p-4" >
                            <h1>₹20</h1>
                            <p className="text-muted"> Intraday and F&O </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}