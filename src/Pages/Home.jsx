import Navbar from "../Layouts/Navbar"
import Hero from "../Layouts/Hero"
import SearchProperty from "../Layouts/SearchProperty"
import Solutions from "../Layouts/Solutions"
import Process from "../Layouts/Process"
import Popular from "../Layouts/Popular"
import About from "../Layouts/About"
import ExpertAgent from "../Layouts/ExpertAgents"
import Testimonial from "../Layouts/Testimonial"
import Followus from "../Layouts/FollowUs"
import Blog from "../Layouts/Blog"
import FAQ from "../Layouts/FAQ"

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <SearchProperty/>
        <Solutions/>
        <Process/>
        <Popular/>
        <About/>
        <ExpertAgent/>
        <Testimonial/>
        <Followus/>
        <Blog/>
        <FAQ/>
        </>
    )
}