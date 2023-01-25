import style from '@/styles/Video.module.css'

const Video = ({link, title}) => {
    return (
        <section className={style.video__section}>
            <iframe className={style.video} width="560" height="315" src={link} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </section>
    )
}

export default Video