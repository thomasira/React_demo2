import Task from "./Task";

const Tasks = (props) => {
    return (
        <ul className="mt-6">
            { props.tasks.map(task => (<Task task={ task } onDelete={ props.onDelete } onToggle={ props.onToggle } key={ task.id }/>)) }
        </ul>
    );
}
export default Tasks;
