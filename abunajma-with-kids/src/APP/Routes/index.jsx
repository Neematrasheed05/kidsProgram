import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import Values from "../Components/Values";
import Contact from "../Components/Contact";
import Philosophy from "../Components/Philosophy";

export default function AllRoutes() {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/values" element={<Values/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/philosophy" element={<Philosophy/>}/>
        <Route path="/contact" element={<Contact/>}/>

        </Routes>
        </BrowserRouter>
    )
}