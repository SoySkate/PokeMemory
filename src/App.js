import logo from './logo.svg';

import Pokemon from './Pokemon';

function App() {
   
  
  return (
    <div className='bg-gray-400'>
        <div className="flex bg-[url('../public/startMenu.jpg')] md:bg-[url('../public/menuPc.jpg')] md:py-96 bg-cover h-72 justify-center items-center">
          <div className='md:py-12 md:px-12 py-6 px-6 bg-red-600 border border-black  rounded-full shadow-xl'>
          <a href='#buttonPlay'><button className="md:text-3xl md:font-bold text-xl font-bold border-2 border-black  bg-white rounded-full md:py-10 md:px-6 py-4 px-2 hover:bg-slate-500 hover:text-white">
     PLAY
      </button></a> </div> 
      
      
      
    </div>
   
      <div>
        <div  class="mx-4 text-center " >
        <button class="font-bold text-3xl border border-black bg-white py-4 px-2 rounded-xl my-10 pointer-events-none">Game of Pokémemory</button>
      <h1 id="buttonPlay" class="font-bold mb-4">Click some pokeball to view the pokémon who's behind it!</h1>
        <Pokemon/>
        </div>
       
        
      </div>
    </div>
  );
}

export default App;
