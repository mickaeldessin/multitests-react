import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

export default function Pokemons() {
  const [pokemon, setPokemons] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(({ data }) => {
        console.log("pokemon go!!!!!", data);
        setPokemons(data);
      });
  }, []);
  return (
    <div>
      <Pokemon
        data={pokemon}
      />
    </div>
  );
}
