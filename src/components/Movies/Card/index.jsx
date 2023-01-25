import style from '@/styles/Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({image, title, favorited, favoriteController, id}) => {
    return (
        <Link to={`/movie/${id}`} className={style.card}>
            <img className={style.card__image} src={image} />
            <div className={style.card__infos}>
                <h2 className={style.card__title}>{title}</h2>
                <span onClick={favoriteController} className={`${style.card__favIcon} ${favorited ? style.favorited : ''}`} />
            </div>
        </Link>
    )
}

export default Card