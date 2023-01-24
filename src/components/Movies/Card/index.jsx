import style from '@/styles/Card.module.css'

const Card = ({image, title, favorited}) => {
    return (
        <div className={style.card}>
            <img className={style.card__image} src={image} />
            <div className={style.card__infos}>
                <h2 className={style.card__title}>{title}</h2>
                <span className={`${style.card__favIcon} ${favorited ? style.favorited : ''}`} />
            </div>
        </div>
    )
}

export default Card