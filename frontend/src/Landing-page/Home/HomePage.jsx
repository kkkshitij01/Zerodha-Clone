import Awards from "./Awards"
import Pricing from "./Pricing"
import Stats from "./Stats"
import Education from "./Education"
import Hero from "./Hero"
import Nav from "../Nav"
import Footer from "../Footer"
export default function HomePage() {
    return (
        <>
            <Nav />
            <Hero />
            <Awards />
            <Stats />
            <Education />
            <Pricing />
            <Footer />
        </>
    )
}