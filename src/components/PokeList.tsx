import React from "react";

interface IPROPS {
  pokemons: {
    url: string;
    name: string;
    category: string;
    weight: Number | string;
    Height: Number | string;
  }[];
}

const PokeList: React.FC<IPROPS> = ({ pokemons }) => {

  const rendePokeList = (): JSX.Element[] => {
    return pokemons.map((poke, i) => {
      return (
        <li className="List" key={i}>
          <div className="List-header">
            <img src={poke.url} className="List-img" alt={poke.name} />
            <h2>{poke.name}</h2>
          </div>
          <p>{poke.Height}</p>
          <p>{poke.category}</p>
          <p className="List-note">{poke.weight} </p>
        </li>
      );
    });
  };

  return <ul>{rendePokeList()}</ul>;
};

export default PokeList;
