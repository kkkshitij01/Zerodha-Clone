export default function LogoImg({ imgSrc, tagLine, imgWidth = "50%" }) {
    return (
        <div className="col" >
            <img src={"media/images/" + imgSrc} alt=" small-case" width={imgWidth} />
            <p style={{ fontSize: "12px", color: "rgb(150,150,150)", marginTop: "10px" }}>{tagLine}</p>
        </div>
    )
}