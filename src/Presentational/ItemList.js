import React from 'react';

export default function ItemList({ allItems, handleDelete }) {
    return (
        <ul>
            {allItems.map(({ title, description, id }) => (
                <li>
                    <div>
                        <h2></h2>
                        <button onClick={() => handleDelete(id)}>X</button>
                    </div>
                    {!description ? null : <p>{description}</p>
                </li>
            ))}
        </ul>
    );
}
