export default function Awards() {
    return (
        <div className="container " style={{ marginTop: "120px" }}>
            <div className="row">
                <div className="col-6 ">
                    <img src="media/images/largestBroker.svg" alt="largest-broker" />
                </div>
                <div className="col-6 ">
                    <h1>Largest stock broker in India</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi suscipit te architecto ipsam voluptas! Eum alias nisi atque at voluptate dolores facilis?</p>
                    <div className="row">
                        <div className="col-6 ">
                            <ul>
                                <li className="mt-3">Future and Options</li>
                                <li className="mt-3">Commodity Derivatives</li>
                                <li className="mt-3">Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6 ">
                            <ul>
                                <li className="mt-3">Stocks & IPOs</li>

                                <li className="mt-3">Direct mutual funds</li>

                                <li className="mt-3">Bonds</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="press-logos" style={{ width: "90%" }} className="mt-5" />
                </div>

            </div>
        </div >
    )
}