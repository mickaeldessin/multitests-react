import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function HarleyQuinn() {
  const [harleyQuinn, setHarleyQuinn] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/309")
      .then(({ data }) => {
        setHarleyQuinn(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={harleyQuinn}
      />
    </div>
  );
}
