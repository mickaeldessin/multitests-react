import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function SuperGirl() {
  const [superGirl, setSuperGirl] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/414")
      .then(({ data }) => {
        setSuperGirl(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={superGirl}
      />
    </div>
  );
}
