import style from '@/styles/Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({image, title, favorited, favoriteController, id}) => {
    return (
        <div className={style.card}>
            <Link className={style.link} to={`/movie/${id}`} >
                <img className={style.card__image} src={image} />
                <h2 className={style.card__title}>{title}</h2>
            </Link>
                <span onClick={favoriteController} className={`${style.card__favIcon} ${favorited ? style.favorited : ''}`} />
        </div>
    )
}

export default Card