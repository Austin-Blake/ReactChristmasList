import React { useState } from 'react';
import NewItem from '../NewItem';
import ItemList from '../ItemList';
import './App.css';

export default function AppFunction() {
    const [newItem, setNewItem] = useState([]);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewItem((prev) => ({ ...prev, id: Date.now(), [name]: value }))
    };

    const [allItems, setAllItems] = setState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newItem.title) return;
        setAllItems((prev) => [newItem, ...prev]);
        setNewItem();
    };

    const handleDelete = (ItemIdToRemove) => {
        setAllItems((prev) => prev.filter((item) => item.id! === taskIdToRemove));
    };
    return (
        <main>
            <h1>{{}}</h1>
            <NewItem
                newItem={newItem}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <ItemList
                allItems={allItems}
                handleDelete={handleDelete}
            />
        </main>
    )
}

