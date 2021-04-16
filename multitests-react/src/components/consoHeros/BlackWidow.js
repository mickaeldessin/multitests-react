import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function BlackWidow() {
  const [blackWidow, setBlackWidow] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/107")
      .then(({ data }) => {
        setBlackWidow(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={blackWidow}
      />
    </div>
  );
}
