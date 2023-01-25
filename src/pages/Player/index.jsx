import { useParams } from "react-router-dom"
import Banner from "@/components/Banner/index"
import Title from "@/components/Title/index"
import Video from "@/components/Video/index"

import json from '@/json/db.json'

const Player = () => {

    const {id}= useParams()

    const currentMovie = json.find(movie => movie.id === Number(id))
   
    return (
        <>
            <Banner image={'/images/BannerPlayer.png'} />
            <Title >{currentMovie.titulo}</Title>
            <Video link={currentMovie.link} title={currentMovie.titulo}/>
        </>
    )
}

export default Player