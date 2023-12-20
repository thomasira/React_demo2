import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([]);
    
    const fetchTasks = async (url) => {
        const res = await fetch(url);
        return await res.json();
    }

    useEffect(() => {
        const getTasks = async () => {
            const tasksDB = await fetchTasks('http://localhost:5000/tasks');
            setTasks(tasksDB);
        } 
        getTasks();
    }, []);

    const updateReminder = async id => {
        const taskToggle = await fetchTasks(`http://localhost:5000/tasks/${id}`);
        const updateTask = { ...taskToggle, reminder: !taskToggle.reminder }
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        });
        setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task));
    }
    const deleteTask = async id => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'delete',
        });
        setTasks(tasks.filter(task => (task.id !== id)));
    }
    const addTask = async task => { 
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const newTask = await res.json();
        setTasks([...tasks, newTask]);
    }
    const [showAdd, setShowAdd] = useState(false);
    
    return (
        <div className="bg-stone-900">
            <div className="font-sans min-h-screen p-8 container mx-auto max-w-screen-md">
                <Header toggleForm={ () => setShowAdd(!showAdd) } showAdd={ showAdd }/>
                { showAdd && <AddTask onAdd={ addTask }/> }
                { tasks.length > 0 ? (
                    <Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={ updateReminder }/>
                ) : (
                    <h2 className="text-white font-bold p-3 text-center text-red-500">Pas de tâches disponibles</h2>
                )}
            </div>
        </div>
    );
}
export default App;
