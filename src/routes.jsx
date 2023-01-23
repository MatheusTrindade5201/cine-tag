import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HeaderBar from "./components/Header"
import Home from "./pages/Home"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <HeaderBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/*" element={<p>Page not Found</p>} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes