import React, { useState } from 'react';
import CurrentList from '../Presentational/CurrentList';
import StartList from '../Presentational/StartList';
import './App.css';

export default function AppFunction() {
  


  ///HandleChange
  const [newItem, setNewItem] = useState({});
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewItem((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    
  };

  
//HandleSubmit
  const [allItems, setAllItems] = useState([]);

  const handleSubmit = (event) => {
        event.preventDefault();
    if (!newItem.title) return;
        setAllItems((prev,) => [newItem, ...prev]);
        setNewItem({});
  };
  

  //HandleDelete
  const handleDelete = (itemIdToRemove) => {
    setAllItems((prev) => prev.filter((item) => item.id !== itemIdToRemove));
  };
  
  return (
    <main>
      <StartList
        allItems={allItems}
        newItem={newItem}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <CurrentList
        allItems={allItems}        
        handleDelete={handleDelete}
      />
    </main>
  );
}

