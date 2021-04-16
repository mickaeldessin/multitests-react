export default function SuperHero(props) {
  return (
    <div>
      <div>
        <img src={props.hero.image.url} alt="perso"></img>
        <h2>{props.hero.name}</h2>
      </div>
      <div>
        <h3>powerStats</h3>
        <p>Intelligence: {props.hero.powerstats.intelligence}</p>
        <p>Strength: {props.hero.powerstats.strength}</p>
        <p>Speed: {props.hero.powerstats.speed}</p>
        <p>Durability: {props.hero.powerstats.durability}</p>
        <p>Power: {props.hero.powerstats.power}</p>
        <p>Combat: {props.hero.powerstats.combat}</p>
      </div>
      {/* <div>
        <h3>Biography</h3>
        <div>alias:{props.hero.aliases.map((alias) => {
          return <p>{alias}</p>
        })}</div> 
         <p>{props.hero.biography["full-name"]}</p>
        <p>{props.hero.biography["alter-ego"]}</p>
        <p>{props.hero.biography["place-of-birth"]}</p>
        <p>{props.hero.biography["first-appearance"]}</p>
        <p>{props.hero.biography.publisher}</p>
        <p>{props.hero.biography.alignment}</p> 
      </div>
      <div>
        <h3>Appearance</h3>
        <p>{props.hero.appearance.gender}</p>
        <p>{props.hero.appearance.race}</p>
        <p>{props.hero.appearance.height[1]}</p>
        <p>{props.hero.appearance.wheight[1]}</p>
      </div> */}
    </div>
  );
}
