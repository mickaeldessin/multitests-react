export default function Simpson(props) {
    return (
      <div className="">
        <img src={props.image} className="" alt="avatar" />
        <div className="">
          <p className="">{props.character}</p>
         <p>{props.quote}</p>
        </div>
      </div>
    );
  }