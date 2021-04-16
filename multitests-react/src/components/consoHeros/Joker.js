import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function Joker() {
  const [joker, setJoker] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/370")
      .then(({ data }) => {
        setJoker(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={joker}
      />
    </div>
  );
}
