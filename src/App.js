import React from "react"
import Star from "./Star";

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


    function toggleFavorite(){
        setContact(()=> ({...contact, isFavorite: !contact.isFavorite}))
    }

    return (
        <main>
            <article className="card">
                <img src={require("./user.png")} className="card--image" alt=""/>
                <div className="card--info">
                    <Star isFilledBool={contact.isFavorite} clickState={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
