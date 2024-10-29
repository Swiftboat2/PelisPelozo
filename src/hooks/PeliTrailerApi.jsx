import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function PeliTrailerApi() {

    const api_key = import.meta.env.VITE_API_KEY;
    const [peliTrailer, setPeliTrailer] = useState([])
    const { id } = useParams()
    
useEffect(() => { 
    const fetchTrailer = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=es-AR`)
            const data = await res.json()
            setPeliTrailer(data.results)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    fetchTrailer()

    }, [id, api_key])  

    return peliTrailer
}



export default PeliTrailerApi;