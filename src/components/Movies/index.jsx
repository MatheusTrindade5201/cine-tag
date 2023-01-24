import style from '@/styles/Movies.module.css'

import json from '@/json/db.json'
import Card from './Card/index'

const Movies = () => {

    return (
        <section className={style.section__movies}>
            <div className={style.movies}>
                {json.map((movie) => <Card title={movie.titulo} image={movie.capa}/>)}
            </div>
        </section>
    )
}

export default Movies