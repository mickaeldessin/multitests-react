import { useEffect, useState } from "react";
import axios from "axios";

export default function ChuckNorris() {
  const [chuckNorris, setChuckNorris] = useState([]);

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random").then(({ data }) => {
      // console.log(data);
      setChuckNorris(data);
    });
  }, []);

  return (
    <div>
      <h2>{chuckNorris.value}</h2>
      <img src = {chuckNorris.icon_url} alt ="img"/>
    </div>
  );
}
