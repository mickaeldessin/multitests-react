import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function Thanos() {
  const [thanos, setThanos] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/655")
      .then(({ data }) => {
        setThanos(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={thanos}
      />
    </div>
  );
}
