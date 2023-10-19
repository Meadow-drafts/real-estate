import Navbar from "../Layouts/Navbar"
import Hero from "../Layouts/Hero"
import SearchProperty from "../Layouts/SearchProperty"
import Solutions from "../Layouts/Solutions"
import Process from "../Layouts/Process"

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <SearchProperty/>
        <Solutions/>
        <Process/>
        </>
    )
}