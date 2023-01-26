import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritesPage from "./pages/Favorites/index"
import Home from "./pages/Home"
import Player from "./pages/Player/index"
import StandardPage from "./pages/StandardPage/index"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StandardPage />}>
                    <Route index exact element={<Home />} />
                    <Route path='favoritos' element={<FavoritesPage />} />
                    <Route path='movie/:id' element={<Player />} /> 
                    <Route path="*" element={<p>Page not Found</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes