import Awards from "./Awards"
import Pricing from "./Pricing"
import Stats from "./Stats"
import Education from "./Education"
import Hero from "./Hero"
import OpenAccount from "../OpenAccount"
export default function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    )
}