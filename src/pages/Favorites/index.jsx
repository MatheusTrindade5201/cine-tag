import style from '@/styles/Favorites.module.css'
import { useFavoriteContext } from '@/common/context/favorite'
import Movies from '@/components/Movies/index'
import Banner from '@/components/Banner/index'
import Title from '@/components/Title/index'

const FavoritesPage = () => {

    const { favorites } = useFavoriteContext()

    return (
        <>
            <Banner image={'/images/BannerFavoritos.png'} />
            <Title>Meus favoritos</Title>
            <Movies MovieList={favorites} />
        </>
    )
}

export default FavoritesPage