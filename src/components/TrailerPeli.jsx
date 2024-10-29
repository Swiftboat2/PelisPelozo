import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PeliTrailerApi from '../hooks/PeliTrailerApi'


function TrailerPeli() {

const peliTrailer = PeliTrailerApi();

console.log(peliTrailer)
    return (
        <>
        <div className='text-center text-xl font-bold'>
        <h1>Trailers</h1>
        </div>
    <ul className='grid md:grid-cols-2 grid-cols-1 lg:ml-[47px]  ml-[7px] mt-10'>
        {peliTrailer.map((peliTrailer) => (
            peliTrailer.type === 'Trailer' &&
            peliTrailer.site === 'YouTube' &&
            peliTrailer.key ? (
                <li key={peliTrailer.id} className="lg:w-[900px] lg:h-[500px] w-[400px] h-[300px] mt-2 grid grid-cols-2">
              <iframe
                title={`Trailer de la película - ${peliTrailer.name}`} 
                src={`https://www.youtube.com/embed/${peliTrailer.key}?autoplay=0&controls=1`}
                className="lg:w-[900px] lg:h-[500px] md:w-[700px] md:h-[400px] w-[400px] h-[300px] mx-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </li>
          ) : null
        ))}
        </ul>
        {peliTrailer.length === 0 && (
            <div className="text-center">No hay trailers disponibles.</div>
        )}
        </>
    );
}

export default TrailerPeli;
