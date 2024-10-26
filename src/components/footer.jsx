import PelisApi from '../hooks/PelisApi';

function Footer() {
    const { setPagina, totalPaginas, pagina } = PelisApi();

    const AnteriorPagina = () => {
        console.log("Página actual antes de retroceder:", pagina);
        if (pagina > 1) {
            setPagina(pagina - 1);
        }
    };
    
    const ProximaPagina = () => {
        console.log("Página actual antes de avanzar:", pagina);
        if (pagina < totalPaginas) {
            setPagina(pagina + 1);
        }
    };
    


   return (
    <div className='flex justify-center items-center h-12 bg-black'>
        <footer className='flex gap-4'>
            <button 
                onClick={AnteriorPagina} 
                disabled={pagina === 1} 
                className={`px-4 py-2 rounded text-white ${pagina === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                ANTERIOR
            </button>
            <p className='text-white'>Página: {pagina} / {totalPaginas}</p>
            <button 
                onClick={ProximaPagina} 
                disabled={pagina === totalPaginas} 
                className={`px-4 py-2 rounded text-white ${pagina === totalPaginas ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                SIGUIENTE
            </button>
        </footer>
    </div>
);

}

export default Footer;
