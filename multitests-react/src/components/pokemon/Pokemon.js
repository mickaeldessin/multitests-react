export default function Pokemon(props) {
    return (
      <div>
        <div>
          {/* <img src={props.data.sprites["front_default"]} alt="images"/> */}
          <h2>{props.data.name}</h2>
          {/* <p>{props.data.order}</p> */}
          {/* <p>{props.data.species.name}</p> */}
        </div>
      </div>
    );
  }
  