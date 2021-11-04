import React, { useState } from "react";
import { ISTATE as Props } from "../App";

interface IProps {
  pokemons: Props["pokemons"];
  setPokemons: React.Dispatch<React.SetStateAction<Props["pokemons"]>>;
}

const AddPoke: React.FC<IProps> = ({ pokemons, setPokemons }) => {
  const [input, setInput] = useState({
    name: "",
    weight: "",
    img: "",
    category: "",
    height: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClick = (): void => {
    if (
      !input.name ||
      !input.img ||
      !input.height ||
      !input.category ||
      !input.weight
    ) {
     return alert("please add something !!");
    }

    setPokemons([
      ...pokemons,
      {
        name: input.name,
        Height: input.height,
        category: input.category,
        url: input.img,
        weight: input.weight,
      },
    ]);
    setInput({ name: "", weight: "", img: "", category: "", height: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        placeholder="poke name"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="poke weight"
        value={input.weight}
        name="weight"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="poke category"
        value={input.category}
        name="category"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="poke image url"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="poke height"
        value={input.height}
        name="height"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add a pokemon
      </button>
    </div>
  );
};

export default AddPoke;
