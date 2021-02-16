import React from 'react';


export default function CurrentList({ allItems, handleDelete}) {

    return (
        <ul>
            {allItems.map(({ name, title, description, id }) => (
                    
                    <li key={id}>
                    
                    <button className="delete-btn" onClick={() => handleDelete(id)}>X</button>
                            <h1>{name.toUpperCase()}:</h1>    
                            <h2>{title.charAt(0).toUpperCase() + title.substring(1).toLowerCase()}</h2>
                        
                    {!description ? null : <h3>{description.charAt(0).toUpperCase() + description.substring(1).toLowerCase()}.</h3>}
                    </li>
                    ))
                }
        </ul>
          
    )
}