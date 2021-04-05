import Jungle from "./Jungle"
import "./MyJungle.css";
const animalsContact = [
    {
        animal : "mika le koala",
        image : "",
        color : "gris"
        
    },
    {
        animal : "sophie la grenouille",
        image : "",
        color : "vert"
    },
    {
        animal : "camille l'écureuil",
        image :"",
        color :"rouge"
    },  

    {
        animal :"raphael le dindon",
        image :"",
        color :"bleu"      
    
    }

]

export default function MyJungle(){
    return(
        animalsContact.map(animal=>{
            return(
            <div className= "bears">
                <Jungle
                image={animal.image}
                animal={animal.animal}
                color={animal.color}
                />
            </div>)

        })

    )
}