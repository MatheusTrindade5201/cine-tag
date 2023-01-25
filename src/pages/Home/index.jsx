import Banner from "@/components/Banner/index"
import Title from "@/components/Title/index"
import Movies from "@/components/Movies/index"

import json from '@/json/db.json'


const Home = () => {
    return (
        <>
            <Banner image={'/images/Banner_Home.png'} />
            <Title>Um lugar para guardar seus vídeos e filmes!</Title>
            <Movies MovieList={json}/>
        </>
    )
}

export default Home