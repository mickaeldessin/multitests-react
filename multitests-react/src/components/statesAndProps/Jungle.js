import "./Jungle.css";
function Jungle(props){
    return (
        <div className="serpent">
            <img src={props.image} className="lion" alt= "lion" />
            <p className="araignée">{props.animal}</p>
        </div>
 );
}



export default Jungle;







