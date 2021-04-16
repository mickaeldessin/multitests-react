import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function Magneto() {
  const [magneto, setMagneto] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/423")
      .then(({ data }) => {
        setMagneto(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={magneto}
      />
    </div>
  );
}
