import { Link } from "react-router-dom"
export default function RightSection({ imageURL, productName, productDescription, textLink }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{ marginTop: "250px", paddingLeft: "100px" }}>
                    <h1 className="fs-4">{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link style={{ marginRight: "75px" }} to="#" >{textLink} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="col-7 p-5 ">
                    <img className=" p-5 " src={"media/images/" + imageURL} alt="a-image" />
                </div>
            </div>
        </div>
    )
}