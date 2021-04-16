import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function CatWoman() {
  const [catWoman, setCatWoman] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/107")
      .then(({ data }) => {
        setCatWoman(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={catWoman}
      />
    </div>
  );
}
