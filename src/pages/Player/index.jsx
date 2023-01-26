import { useParams } from "react-router-dom"
import Banner from "@/components/Banner/index"
import Title from "@/components/Title/index"
import Video from "@/components/Video/index"

import json from '@/json/db.json'
import { useEffect, useState } from "react"

const Player = () => {

    const {id}= useParams()

    const [ currentMovie, setCurrentMovie ] = useState({})
    
    useEffect(() => async () => {
        try {
            const data = await fetch(`https://my-json-server.typicode.com/MatheusTrindade5201/cine-tag-json/videos/${id}`);
            const json = await data.json()
            setCurrentMovie(json)
        } catch (error) {
            console.log(error.message);
        }
    }, [])
   
    return (
        <>
            <Banner image={'/images/BannerPlayer.png'} />
            <Title >{currentMovie.titulo}</Title>
            <Video link={currentMovie.link} title={currentMovie.titulo}/>
        </>
    )
}

export default Player