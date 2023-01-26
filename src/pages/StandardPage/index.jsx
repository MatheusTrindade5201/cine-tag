import { Outlet } from "@/../node_modules/react-router-dom/dist/index"
import { FavoriteProvider } from "@/common/context/favorite"
import Footer from "@/components/Footer/index"
import HeaderBar from "@/components/Header/index"

const StandardPage = () => {
    return (
        <main>
            <HeaderBar />
                <FavoriteProvider>
                    <Outlet />
                </FavoriteProvider>
            <Footer />
        </main>
    )
}

export default StandardPage