import React, { useState } from 'react'

const TaskForm = ({handleTask}) => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();

        handleTask({
            title:title.trim(),
            category:category.trim(),
        });
        setTitle('')
        setCategory('')
    }

return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '24px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                background: '#fafafa',
                minWidth: '300px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
            }}
        >
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                }}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: 'none',
                    background: '#007bff',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Add Task
            </button>
        </form>
        {/* {
            <p>{title} {category}</p>
        } */}
    </div>
    
)
}

export default TaskForm