
import { TextField, List } from '@mui/material'
import useTodos from '../services/useTodos'
import { Task } from "../components/Task";
import { useState } from 'react';

const Home = () => {
    const [todo, setTodo] = useState('')
    const [todos, insertTodo] = useTodos()

    const addTask = (e) => {
        e.preventDefault()
        insertTodo(todo)
        setTodo('')
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <form onSubmit={addTask}>
                <TextField onChange={(e) => {
                    setTodo(e.target.value)
                }}
                    value={todo}
                    label="Ingresa una Tarea"
                    variant="standard" />
            </form>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        description={task.description}
                        date={task.timestamp}
                        completed={task.completed}
                    />
                ))}


            </List>

        </div>
    )
}

export default Home