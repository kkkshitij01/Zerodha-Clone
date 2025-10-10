import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <div className="container text-center mb-5">
            <div className="row">
                <h4 className="mt-5 mb-4 ">404 Not Found
                </h4>
                <p className="text-muted">The page you are looking for does not exist!!</p>
                <Link to="/">Home</Link>
            </div>
        </div >
    )
}