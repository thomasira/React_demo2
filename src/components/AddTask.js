
const AddTask = (props) => {
    return (
        <form className="add-form mt-4">
            <div className="form-control">
                <label>Task
                    <input type="text" name="text" placeholder="add task here"/>
                </label>
            </div>
            <div className="form-control">
                <label>Day & Time
                    <input type="date-time-local" name="day" placeholder="day & time"/>
                </label>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder
                    <input type="checkbox" name="reminder"/>
                </label>
            </div>
            <button type="submit" className="btn btn-gr-green">Sauvegarder</button>
        </form>        
    );
}
export default AddTask;