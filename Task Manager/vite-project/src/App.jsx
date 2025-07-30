import { useState } from "react";

import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [task, setTasks] = useState([]);
  const [filterText, serFilterText] = useState('')
  // const [filterTask, setFilerTask] = useState([])


  const filtertask = task.filter(task => task.category.includes(filterText))


  
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title:taskData.title,
      category:taskData.category
    }

    setTasks([...task, newTask])
    console.log(task)
  };

  const handleDelete = (id) => {
    setTasks(task.filter(del => del.id !== id))
  }

  return (
    <>
    <div style={{ background: "#f0f4f8", minHeight: "100vh", padding: "20px", display: "flex", justifyContent: "center" }}>

        <div
      className="app-container"
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 32,
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2d3748",
          marginBottom: 32,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        Personal Task Manager
      </h1>
      <TaskForm handleTask={addTask} />
      {/* <p>{filter}</p> */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: 24 }}>
        {task.map((task, index) => (
          <li
            key={index}
            style={{
              background: "#fff",
              marginBottom: 16,
              padding: "18px 20px",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "box-shadow 0.2s",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                  color: "#222",
                  fontSize: 18,
                }}
              >
                {task.title}
              </p>
              <span
                style={{
                  fontSize: 14,
                  color: "#5a5a5a",
                  background: "#f1f5f9",
                  padding: "2px 8px",
                  borderRadius: 6,
                  marginTop: 4,
                  display: "inline-block",
                }}
              >
                {task.category}
              </span>
            </div>
            <button
              onClick={() => handleDelete(task.id)}
              style={{
                background: "linear-gradient(90deg, #ff6a6a 0%, #ffb86c 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "8px 16px",
                fontWeight: 500,
                cursor: "pointer",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                transition: "background 0.2s",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    
    <div style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 32,
        background: "linear-gradient(135deg, #86a1ecff 0%, #cfdef3 100%)",
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
      }}>
      <h3>Filtered Items</h3>
      <input type="text" value={filterText} onChange={(e) => serFilterText(e.target.value)} placeholder="Search by Catgory "/>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 24 , color: "#333", fontSize: "20px" , fontWeight: "500"}}>
        {filterText == "" ? <h1>Search by category</h1> :  
          filtertask.map((task, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {task.title} - {task.category}
            </li>
          ))}
      </ul>
    </div>

    </div>
    
    </>
  );
}

export default App;
