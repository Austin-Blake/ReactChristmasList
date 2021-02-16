import React from 'react';
//onsubmit should render to new page which displays the actual list

export default function StartList({allItems, newItem, handleChange, handleSubmit }) {
    
    return (
        <form onSubmit={handleSubmit} className='start-list' >

            {allItems.includes(newItem.name) ? null : (
            <div className="container">    
            <input
                className="input"
                name="name"
                placeholder="Who is this list for?"
                value={newItem.name || ""}
                onChange={handleChange}
            /> 
            </div>
                    )}
            {!newItem.name ? null : (
                <div className="container">
                    <input
                        className="input"
                        name="title"
                        placeholder="New Item"
                        value={newItem.title || ""}
                        onChange={handleChange}
                    />
                </div>
            )}
            {!newItem.title ? null : (
                <div className="container">
                    <input
                    className="input"
                    name="description"
                    placeholder='Details...'
                    value={newItem.description || ""}
                    onChange={handleChange}
                    />
                    <button className="btn" type="submit" >Add List Item</button>
                </div>
            )}
        </form>
    );
}
