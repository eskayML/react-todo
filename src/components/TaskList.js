
const iconStyling = { color: 'red', cursor: 'pointer' }


function TaskList({ tasks, deleteTask, toggleCompleted }) {

    return (
        <div className='list-group mt-4 shadow-sm' >
            {tasks.map((task) => (
                <div className={`list-group-item task-item ${task.completed && 'reminder'}  `}
                    key={task.id}
                    onDoubleClick={() => toggleCompleted(task.id)}>
                    <b>{task.name}</b> 
                    <i className='fa fa-times' style={iconStyling} onClick={() => deleteTask(task.id)} ></i>
                </div>
            ))}
        </div>
    );
}








export default TaskList;

