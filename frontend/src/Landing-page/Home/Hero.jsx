export default function Hero() {
    return (
        <div className="container text-center mb-5" >
            <div className="row">
                <img src='media/images/homeHero.png' alt="Hero-image" className="mb-3 col-8" style={{ margin: "0 auto" }} />
                <h1 className="mt-5 ">Invest In Everything</h1>
                <p className="mb-5 fs-5" style={{ wordSpacing: "5px" }}>
                    Online platform to invest in stocks, derivatives , mutual funds , and more
                </p>
                <button className="p-2 btn fs-5" style={{ width: "16%", margin: "0 auto", fontWeight: "500", backgroundColor: "#387ed1", color: "white", borderRadius: "3px", }} > Sign up for Free </button>
            </div>
        </div >
    )
}