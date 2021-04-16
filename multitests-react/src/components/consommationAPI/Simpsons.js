import { useEffect, useState } from "react";
import axios from "axios";
import Simpson from "./Simpson";

export default function Simpsons() {
  const [simpsons, setSimpsons] = useState([]);

  useEffect(() => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=2")
      .then(({ data }) => {
        // console.log(data);
        setSimpsons(data);
      });
  }, []);
  return simpsons.map((simpson) => {
    return (
      <div>
        <Simpson
          image={simpson.image}
          character={simpson.character}
          quote={simpson.quote}
        />
      </div>
    );
  });
}
