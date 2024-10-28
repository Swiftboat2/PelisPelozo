import PeliInfoApi from '../hooks/PeliInfoApi'



function PeliInfo() {


const infoPeli  = PeliInfoApi();

console.log(infoPeli)

if (!infoPeli || typeof infoPeli !== 'object' || Object.keys(infoPeli).length === 0) {
    return <p>Cargando información de la película...</p>;
}


    return (
        <div className='flex justify-center items-center w-screen h-screen bg-black p-4'>
            <p className='text-white'>Título: {infoPeli.title || "Título no disponible"}</p>
            <p className='text-white'>Descripción: {infoPeli.overview || "Descripción no disponible"}</p>
            <p className='text-white'>Voto promedio: {infoPeli.vote_average || "No disponible"}</p>
            <p className='text-white'>Fecha de lanzamiento: {infoPeli.release_date || "No disponible"}</p>
        </div>

    )
}

export default PeliInfo;

