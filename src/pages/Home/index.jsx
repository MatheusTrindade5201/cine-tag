import Banner from "@/components/Banner/index"
import Title from "@/components/Title/index"
import Movies from "@/components/Movies/index"
import { useEffect, useState } from "react"


const Home = () => {

    const [ movies, setMovies ] = useState([])
    
    useEffect(() => async () => {
        try {
            const data = await fetch('https://my-json-server.typicode.com/MatheusTrindade5201/cine-tag-json/videos');
            const json = await data.json()
            setMovies(json)
        } catch (error) {
            console.log(error.message);
        }
    }, [])

    return (
        <>
            <Banner image={'/images/Banner_Home.png'} />
            <Title>Um lugar para guardar seus vídeos e filmes!</Title>
            <Movies MovieList={movies}/>
        </>
    )
}

export default Home