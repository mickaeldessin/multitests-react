import Jungle from "./Jungle"
import "./MyJungle.css";
const animalsContact = [
    {
        animal : "mika le koala",
        image : "pictures/koala.jpg",
        color : "gris"
        
    },
    {
        animal : "sophie la grenouille",
        image : "pictures/grenouille.jpg",
        color : "vert"
    },
    {
        animal : "camille l'écureuil",
        image :"pictures/ecureuil.jpg",
        color :"rouge"
    },  

    {
        animal :"raphael le dindon",
        image :"pictures/dindon.jpg",
        color :"bleu"      
    
    }

]

export default function MyJungle(){
    return(
        animalsContact.map(animalContact=>{
            return(
            <div className= "bears">
                <Jungle
                image={animalContact.image}
                animal={animalContact.animal}
                color={animalContact.color}
                />
            </div>)

        })

    )
}