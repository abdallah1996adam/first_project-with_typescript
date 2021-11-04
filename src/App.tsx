import React, { useState } from "react";
import "./App.css"


import AddPoke from "./components/AddPoke";
import PokeList from './components/PokeList'


export interface ISTATE {
  pokemons :{
    url:string,
    name: string,
    category: string,
    weight: Number | string,
    Height:Number | string,
  }[]
}

function App() {

  const [pokemons, setPokemons] = useState<ISTATE['pokemons']>([
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      name:"vFlorizarre",
      category:"Graine",
      weight:"100.0 kg",
      Height:"2,5 m"
  }
])

 

  return (
    <div className="container">
      <h1>Pokemons List </h1>
      <PokeList pokemons={pokemons}/>
      <AddPoke pokemons={pokemons} setPokemons = {setPokemons}/>
    </div>
  );
}

export default App;
