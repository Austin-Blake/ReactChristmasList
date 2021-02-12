import React from 'react'

export default function NewTask({ newItem, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="title"
                placeholder="Make a New List!"
                value={newItem.title}
                onChange={handleChange}
            />
            {!newItem.title ? null : (
                <>
                    <textarea
                    name="description"
                    value={newItem.description}
                    onChange={handleChange}
                    />
                    <button type="submit">Add List Item</button>
                </>
            )}
        </form>
    );
}