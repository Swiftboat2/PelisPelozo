import PeliInfoApi from '../hooks/PeliInfoApi'
import { Link } from 'react-router-dom'



function PeliInfo() {
 
const infoPeli  = PeliInfoApi();
console.log(infoPeli)

if (!infoPeli || typeof infoPeli !== 'object' || Object.keys(infoPeli).length === 0) {
    return <p>Cargando información de la película...</p>;
}

    return (
    <>
    <div className="flex w-screen bg-slate-700 text-white">
        <Link to="/" className="h-20 flex items-center ml-5">
          <h1 className="font-bold text-xl">Volver</h1>
        </Link>
    </div>
      <p className="text-center mb-10 mt-5 lg:text-3xl font-bold">
        {infoPeli.title || "Título no disponible"}
      </p>
      <div className="grid lg:grid-cols-2 gap-2 p-5 items-center rounded-3xl">
        <div className="flex flex-col items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${infoPeli.poster_path}`}
            className="rounded-t-3xl h-[400px] w-[300px]"
            alt={infoPeli.title || "Imagen no disponible"}
          />
          <Link to={`/trailers/${infoPeli.id}`} className="text-blue-500 mt-2">Ver trailers</Link>      
                    <span className="text-xl font-bold flex items-center mt-2">
                        Voto promedio: {parseFloat(infoPeli.vote_average).toFixed(2) || "No disponible"}
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 text-yellow-500"
                        >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                          <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#eab308" />
                        </g>
                      </svg>
                    </span>
            <p className='ml-5 mt-3 text-center justify-center items-center font-bold'>Fecha de lanzamiento: {infoPeli.release_date || "No disponible"}</p>
        </div>
        <div>
            <p className='text-xl font-bold'>Sinopsis:</p>
            <p className=' font-semibold text-pretty mt-1'> {infoPeli.overview || "Descripción no disponible"}</p>
        </div>
    </div>
    </>
    )
}

export default PeliInfo;

