import Contact from "./Contact";
const allContact = [
    {
        firstname:"tata jeannette",
        img:"pictures/roger.jpg",
        online: true
    },
    {
        firstname:"titi le poulet",
        img:"pictures/vegeta.png",
        online: false
    },
    {
        firstname:"tonton pervers",
        img:"pictures/mika.JPG",
        online: true
    }
]



export default function MyContacts(){
    return(
        allContact.map(contact=>{
            return(
            <div>
                <Contact
                img={contact.img}
                firstname={contact.firstname}
                online={contact.online}
                />
            </div>)

        })

    )
}