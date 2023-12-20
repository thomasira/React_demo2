import { useState } from "react";

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [day, setDate] = useState(''); 
    const [reminder, setReminder] = useState(false); 

    const onSubmit = (e) => {
        e.preventDefault(); 

        if(!text) {
            alert('Please insert task');
        } else {
            onAdd({ text, day, reminder });
            setText('');
            setDate('');
            setReminder(false);
        }
    }

    return (
        <form className="add-form mt-4" onSubmit={ onSubmit }>
            <div className="form-control">
                <label>Task
                    <input type="text" name="text" placeholder="add task here" value={ text } onChange={ (e) => setText(e.target.value) }/>
                </label>
            </div>
            <div className="form-control">
                <label>Day & Time
                    <input type="datetime-local" name="day" placeholder="day & time" value={ day } onChange={ (e) => setDate(e.target.value) }/>
                </label>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder
                    <input type="checkbox" name="reminder" checked={ reminder } onChange={ (e) => setReminder(e.target.checked) }/>
                </label>
            </div>
            <button type="submit" className="btn btn-gr-green">Sauvegarder</button>
        </form>        
    );
}
export default AddTask;