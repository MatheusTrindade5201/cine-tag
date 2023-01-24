import style from '@/styles/Movies.module.css'

import json from '@/json/db.json'
import Card from './Card/index'
import { useFavoriteContext } from '@/common/context/favorite'

const Movies = () => {

    const {favorites, favorite} = useFavoriteContext()

    return (
        <section className={style.section__movies}>
            <div className={style.movies}>
                {json.map((movie) => 
                <Card 
                    key={movie.id} 
                    title={movie.titulo} 
                    image={movie.capa}
                    favoriteController={() => favorite(movie)}
                    favorited={favorites.some(favorite => favorite.id === movie.id)}
                />)}
            </div>
        </section>
    )
}

export default Movies