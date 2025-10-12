import { Link } from "react-router-dom"
export default function CreateTicket() {
    return (
        <div className="container">
            <h1 className="mt-5 fs-2" style={{ marginLeft: "45px" }}>To  create a ticket , select a relevant topic</h1>
            <div className="row mt-5 mb-5 p-5 " >
                <div className="col">
                    <h1 className="fs-5"> <i class="fa fa-plus-circle" style={{ marginRight: "10px" }} aria-hidden="true"></i>
                        Account Opening</h1>
                    <div className="createTicket-links"><Link to="#" >Online Account Opening</Link></div>
                    <div className="createTicket-links"><Link to="#">Offline Account Opening</Link></div>
                    <div className="createTicket-links"><Link to="#">Company, Partnership and HUF Account Opening</Link></div>
                    <div className="createTicket-links"><Link to="#">NRI Account Opening</Link></div>
                    <div className="createTicket-links"><Link to="#">Charges at Zerodha</Link></div>
                    <div className="createTicket-links"><Link to="#">Zerodha IDFC FIRST Bank 3-in-1 Account</Link></div>
                    <div className="createTicket-links"><Link to="#">Getting Started</Link></div>
                </div>
                <div className="col">
                    <h1 className="fs-5"> <i className="fa fa-user" style={{ marginRight: "10px" }} aria-hidden="true"></i>Your Zerodha Account   </h1>
                    <div className="createTicket-links"><Link to="#">Login Credentials</Link></div>
                    <div className="createTicket-links"><Link to="#">Account Modification and Segment Addition</Link></div>
                    <div className="createTicket-links"><Link to="#">DP ID and bank details</Link></div>
                    <div className="createTicket-links"><Link to="#">Your Profile</Link></div>
                    <div className="createTicket-links"><Link to="#">Transfer and conversion of shares</Link></div>
                </div>
                <div className="col">
                    <h1 className="fs-5"><i class="fa fa-bar-chart" style={{ marginRight: "10px" }} aria-hidden="true"></i>
                        Trading and Markets</h1>
                    <div className="createTicket-links"><Link to="#">Margin/leverage, Product and Order types</Link></div>
                    <div className="createTicket-links"><Link to="#">Kite Web and Mobile</Link></div>
                    <div className="createTicket-links"><Link to="#">Trading FAQs</Link></div>
                    <div className="createTicket-links"><Link to="#">Corprate Actions</Link></div>
                    <div className="createTicket-links"><Link to="#">Sentinel</Link></div>
                    <div className="createTicket-links"><Link to="#">Kite API</Link></div>
                    <div className="createTicket-links"><Link to="#">Pi and other platforms</Link></div>
                    <div className="createTicket-links"><Link to="#">Stockreports</Link></div>
                    <div className="createTicket-links"><Link to="#">GTT</Link></div>
                </div>
            </div>
            <div className="row mt-5 mb-5 p-5 " >
                <div className="col">
                    <h1 className="fs-5"> <i class="fa fa-credit-card-alt" style={{ marginRight: "10px" }} aria-hidden="true"></i>

                        Funds</h1>
                    <div className="createTicket-links"><Link to="#" >Adding Funds</Link></div>
                    <div className="createTicket-links"><Link to="#">Fund Withdrawal</Link></div>
                    <div className="createTicket-links"><Link to="#">eMandates</Link></div>
                    <div className="createTicket-links"><Link to="#">Adding Bank Accounts</Link></div>
                </div>
                <div className="col">
                    <h1 className="fs-5"> <i className="fa fa-circle-o-notch" style={{ marginRight: "10px" }} aria-hidden="true"></i>console  </h1>
                    <div className="createTicket-links"><Link to="#">Reports</Link></div>
                    <div className="createTicket-links"><Link to="#">Ledger</Link></div>
                    <div className="createTicket-links"><Link to="#">Portfolio</Link></div>
                    <div className="createTicket-links"><Link to="#">60 Day Challenge</Link></div>
                    <div className="createTicket-links"><Link to="#">IPO</Link></div>
                    <div className="createTicket-links"><Link to="#">Referral Program</Link></div>
                </div>
                <div className="col">
                    <h1 className="fs-5"><i class="fa fa-circle-thin" style={{ marginRight: "10px" }} aria-hidden="true"></i>
                        Coin</h1>
                    <div className="createTicket-links"><Link to="#">Understanding Mutual Funds</Link></div>
                    <div className="createTicket-links"><Link to="#">About Coin</Link></div>
                    <div className="createTicket-links"><Link to="#">Buying and Selling through Coin</Link></div>
                    <div className="createTicket-links"><Link to="#">Starting an SIP</Link></div>
                    <div className="createTicket-links"><Link to="#">Managing your Portfolio</Link></div>
                    <div className="createTicket-links"><Link to="#">Coin App</Link></div>
                    <div className="createTicket-links"><Link to="#">Moving to Coin</Link></div>
                    <div className="createTicket-links"><Link to="#">Government Securities</Link></div>
                </div>
            </div>
        </div>
    )
}