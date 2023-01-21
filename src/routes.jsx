import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<Home />} />
               <Route path="/*" element={<p>Page not Found</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes