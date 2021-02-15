import React from 'react'
//import OutlinedCard from './OutlinedCard';


const CardList = ({lista}) => {

    return (
        <div>
            {/*lista.map((element, i) => (<OutlinedCard description={element.description} 
            responsible={element.responsible} status={element.status} dueDate={element.dueDate}/>))*/}
            <h1>{lista[0].description}</h1>
        </div>
    )
}

export default CardList;
