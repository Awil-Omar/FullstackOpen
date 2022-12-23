const Persons = ({personsToShow}) =>{
    return(

        <div>
            {personsToShow.map(p => ( <div key={p.name}>
                {p.name} {p.number} { " "} </div>))}
           
        </div>
    );
}

export default Persons;