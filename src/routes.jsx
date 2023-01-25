import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FavoriteProvider } from "./common/context/favorite"
import Footer from "./components/Footer"
import HeaderBar from "./components/Header"
import FavoritesPage from "./pages/Favorites/index"
import Home from "./pages/Home"
import Player from "./pages/Player/index"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <HeaderBar />
                <FavoriteProvider>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path={'/favoritos'} element={<FavoritesPage />} />
                        <Route path={'/movie/:id'} element={<Player />} /> 
                        <Route path="/*" element={<p>Page not Found</p>} />
                    </Routes>
                </FavoriteProvider>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes