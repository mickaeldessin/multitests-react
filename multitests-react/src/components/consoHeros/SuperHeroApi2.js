import { useEffect, useState } from "react";
import axios from "axios";

export default function SuperHeroApi2() {
  const [titi, setSuperHeros] = useState([]);
  console.log("je suis dans la fonction SuperHeros");
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/10")
      .then(({ data }) => {
        console.log("here", data);
        setSuperHeros(data);
      });
  }, []);
  return (
    <div>
      <h2>{titi.name}</h2>
      <img src = {titi.image.url} alt ="img"/>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {titi.powerstats.intelligence}</p>
        <p>strength: {titi.powerstats.strength}</p>
        <p>speed: {titi.powerstats.speed}</p>
        <p>durability: {titi.powerstats.durability}</p>
        <p>power: {titi.powerstats.power}</p>
        <p>combat: {titi.powerstats.combat}</p>
        <h3>Biography</h3>
        <p>full name: {titi.biography["full-name"]}</p>
        <div>{titi.biography.aliases.map((alias) => {
          return <p>{alias}</p>
        })}</div>
      </div>
    </div>
  );
}
