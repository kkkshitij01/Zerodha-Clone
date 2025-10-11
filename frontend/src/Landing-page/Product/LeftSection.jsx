import { Link } from "react-router-dom"
export default function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container ">
            <div className="row p-2">
                <div className="col-8 p-5 ">
                    <img className=" p-5 " src={"media/images/" + imageURL} alt="a-image" />
                </div>
                <div className="col-4" style={{ marginTop: "100px", padding: "40px" }}>
                    <h1 className="fs-4">{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link style={{ marginRight: "75px" }} to={tryDemo} >Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        <Link to={learnMore} >Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                    <div className="mt-4">
                        <Link style={{ marginRight: "30px" }} to={googlePlay} ><img src="media/images/googlePlayBadge.svg" alt="" /></Link>
                        <Link to={appStore} ><img src="media/images/appstoreBadge.svg" alt="" /></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}