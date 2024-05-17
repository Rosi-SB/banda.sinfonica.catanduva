import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import Register from "./pages/Register/Register"
import Contact from "./pages/Contact/Contact"

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/about" element={ <About />} />
                <Route path="/gallery" element={ <Gallery />} />
                <Route path="/contact" element={ <Contact />} />
                <Route path="/register" element={ <Register />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes



   
                