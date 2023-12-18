import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete, onToggle}) => {
    const dateDisplay = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    };
    return (
        <li className={ `flex justify-between items-center p-2 px-4 cursor-pointer my-2 bg-green-100 rounded ${ task.reminder ? 'border-l-8 border-yellow-400' : ''}`} onDoubleClick={ () => onToggle(task.id) }>
            <div>
                <h3 className="font-bold">{ task.text }</h3>
                <p>{ dateDisplay(task.day) }</p>
            </div>
            <div>
                <FaTimes className='text-red-600' onClick={ () => onDelete(task.id) }/>
            </div>
        </li>
    );
}
export default Task;