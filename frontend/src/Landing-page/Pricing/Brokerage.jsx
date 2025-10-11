import OpenAccount from "../OpenAccount"
export default function Brokerage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <h5 className="text-center" style={{ color: "#387ed1" }}>Brokerage calculator</h5>
                    <ul className="mt-5 ">
                        <li className="mt-3 text-muted">
                            Call & Trade and RMS auto-squareoff: Additional charges of 750 + GST per order.</li>
                        <li className="mt-3 text-muted"> Digital contract notes will be sent via e-mail.</li>
                        <li className="mt-3 text-muted"> Physical copies of contract notes, if required, shall be charged 720 per contract note. Courier charges apply.</li>
                        <li className="mt-3 text-muted"> For NRI account (non-PIS), 0.5% or 7100 per executed order for equity (whichever is lower).</li>
                        <li className="mt-3 text-muted">For NRI account (PIS), 0.5% or ‹200 per executed order for equity (whichever is lower).</li>
                        <li className="mt-3 text-muted"> If the account is in debit balance, any order placed will be charged F40 per executed order instead of 720 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5 className="text-center" style={{ color: "#387ed1" }}> List of charges</h5>
                </div>
            </div>
        </div >
    )
}