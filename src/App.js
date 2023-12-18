import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Buy groceries",
            "day": "2023-12-12 16:30:00",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Exercise for 30 minutes",
            "day": "2023-12-19 08:15:00",
            "reminder": true
        },
        {
            "id": 3,
            "text": "Read a book",
            "day": "2024-01-01 00:01:00",
            "reminder": false
        },
        {
            "id": 4,
            "text": "Write in a journal",
            "day": "2024-01-16 12:45:00",
            "reminder": false
        }
    ]);
    const updateReminder = id => setTasks(tasks.map(task => task.id === id ? {...task, reminder:!task.reminder} : task));
    const deleteTask = id => setTasks(tasks.filter(task => (task.id !== id)));

    return (
        <div className="bg-stone-900">
            <div className="font-sans min-h-screen p-8 container mx-auto max-w-screen-md">
                <Header/>
                <AddTask/>
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
