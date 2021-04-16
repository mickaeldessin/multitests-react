import { useEffect, useState } from "react";
import axios from "axios";
import SuperHero from "./SuperHero";

export default function Hawkgirl() {
  const [hawkgirl, setHawkGirl] = useState([]);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/796521371273281/315")
      .then(({ data }) => {
        setHawkGirl(data);
      });
  }, []);
  return (
    <div>
      <SuperHero
        hero={hawkgirl}
      />
    </div>
  );
}
