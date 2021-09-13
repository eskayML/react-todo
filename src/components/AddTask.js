import { useState } from "react";



function AddTask({addTask}) {
    const [name, setName] = useState('')
    const completed = false


    function handleSubmit(e){
        e.preventDefault()
        if(!name){
            alert('You didnt enter any value! ')
            return;
        }
        addTask({name , completed })
        setName('')
        e.target.reset()
    }


    return (
        <form onSubmit={handleSubmit} method='post'  >
            <div className='input-group'>
                <input className='form-control' onChange={e => setName(e.target.value)} />
                <button className='btn btn-success  input-group-addon' type='submit'>Add <i className='fa fa-plus-circle'></i></button>
            </div>
        </form>
    );
}



export default AddTask;
