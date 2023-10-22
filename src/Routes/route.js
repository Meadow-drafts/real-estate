import Home from "../Pages/Home"
import Listings from "../Pages/Listings"
import Agents from "../Pages/Agents"






export const appRoutes ={
    home: {path:'/', element: <Home/>},
    listings: { path: '/listings', element: <Listings/> },
    agents: { path: '/agents', element: <Agents/> }
    
}