import Awards from "./Awards"
import Pricing from "./Pricing"
import Stats from "./Stats"
import Education from "./Education"
import Hero from "./Hero"
export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Education />
            <Pricing />
            <Awards />
        </>
    )
}