import style from '@/styles/Header.module.css'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <img src='/images/Logo-cinetag-branco 1.png' />
                <nav className={style.header__links}>
                    <Link to={'/'} className={style.header__link}>Home</Link>
                    <Link to={'/favoritos'} className={style.header__link}>Favoritos</Link>
                </nav>
            </div>
        </header>
    )
}

export default HeaderBar