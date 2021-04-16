import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function Hulk() {
  const [hulk, setHulk] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/332")
      .then(({ data }) => {
        setHulk(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={hulk}
      />
    </div>
  );
}
