import PelisApi from '../hooks/PelisApi';

function Footer() {
    const { setPagina, totalPaginas, pagina } = PelisApi();

    return (
        <div className='flex justify-center text-center h-6 bg-black'>
            <footer>
                <button 
                    onClick={handlePrevPage} 
                    disabled={pagina === 1} 
                    className='text-white'
                >
                    ANTERIOR
                </button>
                <button 
                    onClick={handleNextPage} 
                    disabled={pagina === totalPaginas} 
                    className='text-white'
                >
                    SIGUIENTE
                </button>
            </footer>
        </div>
    );
}

export default Footer;
