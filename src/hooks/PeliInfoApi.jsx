import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function PeliInfoApi() {

    const api_key = import.meta.env.VITE_API_KEY;
    const [infoPeli, setInfoPeli] = useState({})
    const { id } = useParams()
    
useEffect(() => { 
    const fetchInfo = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-AR`)
            const data = await res.json()
            setInfoPeli(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

        fetchInfo()
    }, [id, api_key])  


    return infoPeli
}



export default PeliInfoApi;