import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function Loki() {
  const [loki, setLoki] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/414")
      .then(({ data }) => {
        setLoki(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={loki}
      />
    </div>
  );
}
