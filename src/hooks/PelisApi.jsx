import { useState, useEffect } from "react";

function PelisApi() {  
    const [Pelis, setPelis] = useState([]);
    const [error, setError] = useState(null);
    const [pagina, setPagina] = useState(1);
    const [filtrar, setFiltrar] = useState('');
    const [totalPaginas, setTotalPaginas] = useState(0);
    const api_key = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchPelis = async () => {
            try {
                const url = filtrar === '' 
                    ? `https://api.themoviedb.org/3/movie/popular?language=es-AR&page=${pagina}&api_key=${api_key}`
                    : `https://api.themoviedb.org/3/search/movie?query=${filtrar}&language=es-AR&page=${pagina}&api_key=${api_key}`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue correcta');
                }
                
                const data = await response.json();
                setPelis(data.results);
                setTotalPaginas(data.total_pages);
                
                if (filtrar) {
                    setPagina(1);
                }
            
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
                setError(error.message);
            }
        };

        fetchPelis();
    }, [api_key, pagina, filtrar]);

      
    if (error) {
        return <div className="text-red-500 font-bold text-center mt-4">Error: {error}</div>;
    }

    return { Pelis, setFiltrar, pagina, setPagina, totalPaginas, filtrar,  };
}  

export default PelisApi;
