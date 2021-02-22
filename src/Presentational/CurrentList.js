import React from 'react';


export default function CurrentList({ allItems, handleDelete}) {

    return (
        <main className="list-main">
            <div className="list-container">
        <ul className='item-list'>
        
            {allItems.map(({ name, title, description, id }) => (
                    <>
                    <li key={name} className={"name"}>
                    <h1>{name.toUpperCase()}:</h1>
                    </li>
                    <li key={id} className={"title"}>
                    <h2>{title.charAt(0).toUpperCase() + title.substring(1).toLowerCase()}:</h2>
                    {!description ? null : <h3>{description.charAt(0).toUpperCase() + description.substring(1).toLowerCase()}.</h3>}
                    <button className="delete-btn" onClick={() => handleDelete(id)}>X</button>
                </li>
                  </>  ))
                }
            </ul>
            </div>
        </main>  
    )
}