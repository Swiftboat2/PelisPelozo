function PeliInfo() {
    const api_key = import.meta.env.VITE_API_KEY;
    const fetchInfo = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-AR`)
        const data = await res.json()
        console.log(data)
        return data
    }

    return {fetchInfo}
}



export default PeliInfo