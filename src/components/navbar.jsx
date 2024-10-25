import '../index.css'


function Navbar() {
    const logotmdb = '/assets/logotmdb.svg'
    return (
        <>
    <header className=" bg-slate-700 text-white w-[100%]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <h1 className="font-bold xl:text-2xl text-[0.8rem]">PelisPelozo</h1>
        <img 
          className="w-12 h-12" 
          src={logotmdb}
          alt="TMDB"
        />
      </div>
    </header>
    </>
    )
}

export default Navbar