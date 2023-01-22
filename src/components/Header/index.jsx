import style from '@/styles/Header.module.css'

const HeaderBar = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <img src='/images/Logo-cinetag-branco 1.png' />
                <nav className={style.header__links}>
                    <a className={style.header__link}>Home</a>
                    <a className={style.header__link}>Favoritos</a>
                </nav>
            </div>
        </header>
    )
}

export default HeaderBar