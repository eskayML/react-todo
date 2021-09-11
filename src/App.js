import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useState } from "react";
import Footer from './components/Footer';

if (!localStorage.getItem('list')) {
	localStorage.setItem('list', JSON.stringify([]))
}
// omoor bug solved just laidat :)



let fetchData = JSON.parse(localStorage.getItem('list'))

function App() {
	console.log(fetchData)
	const [tasks, setTasks] = useState(fetchData)



	function addTask(task) {
		console.log(task)
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = { id, ...task }
		// console.log(newTask)
		setTasks([...tasks, newTask])
		fetchData.push(newTask)
		localStorage.setItem('list', JSON.stringify(fetchData))

	}



	function deleteTask(id) {
		setTasks(tasks.filter((task) => task.id !== id))
		fetchData = fetchData.filter((task) => task.id !== id)
		localStorage.setItem('list', JSON.stringify(fetchData))
	}


	function toggleCompleted(id) {
		setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
		fetchData = fetchData.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
		localStorage.setItem('list', JSON.stringify(fetchData))
	}




	return (
		<>
			<div className='card shadow col-md-6  mx-auto p-5 mt-5 col-xs-9' style={{ maxHeight: '445px', overflow: 'scroll' }} >
				<Header />
				<AddTask addTask={addTask} />
				{
					tasks.length > 0 ?
						<TaskList tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
						: <h5 style={{ marginTop: '50px' }}>
							There are no tasks!
						</h5>
				}
			</div>
			<Footer />
		</>
	);
}


export default App;
