import LogoImg from "./LogoImg";

export default function Universe() {
    return (
        <div className="container text-center">
            <h1  >The Zerodha Universe</h1>
            <p className="mt-4 mb-5">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row mt-5">
                <LogoImg imgSrc={"smallcaseLogo.png"} tagLine={"Thematic investment platform"} />
                <LogoImg imgSrc={"streakLogo.png"} tagLine={"Algo & strategy platform"} imgWidth="37%" />
                <LogoImg imgSrc={"sensibullLogo.svg"} tagLine={"Options trading platform"} imgWidth="39%" />
            </div>
            <div className="row mt-5 mb-5">
                <LogoImg imgSrc={"zerodhaFundhouse.png"} tagLine={"Asset management"} />
                <LogoImg imgSrc={"goldenpiLogo.png"} tagLine={"Bonds trading platform"} imgWidth="37%" />
                <LogoImg imgSrc={"dittoLogo.png"} tagLine={"Options trading platform"} imgWidth="30%" />
            </div>
            <button className="mb-5 btn p-2" style={{ backgroundColor: "#387ed1", color: "white", fontSize: "22px" }}>Sign up for free</button>
        </div >
    )
}