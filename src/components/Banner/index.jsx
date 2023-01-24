import style from '@/styles/Banner.module.css'

const Banner = ({image, title}) => {
    return (
        <span className={style.banner} style={{backgroundImage: `url(${image})`}} />
    )
}

export default Banner