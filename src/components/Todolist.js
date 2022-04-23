import React , {useState , useEffect} from 'react';
import Createtask from '../modals/createtask';
import Card from './Card';

const Todolist = () => {

    const [modal , setModal] = useState(false);
    const [tasklist , setTasklist]  = useState([]);    

    useEffect(()=>{
        let arr = localStorage.getItem("TaskList");
        if(arr){
            let obj = JSON.parse(arr);
            setTasklist(obj);
        }
    },[]);

    const deleteTask = (index) => {
        let tempList = tasklist
        tempList.splice(index, 1)
        localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTasklist(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = tasklist
        tempList[index] = obj
        localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTasklist(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTasklist = (taskObj) => {
        let tempList = tasklist;
        tempList.push(taskObj);
        localStorage.setItem("TaskList" , JSON.stringify(tempList));
        setTasklist(tempList);
    }

    return (
        <>

            <div className='header text-center'>
                <h3>TodoList</h3>
                <button className="btn btn-primary" onClick={() => setModal(true)} >Create Task</button>
            </div>

            <div className='task-container'>
                {tasklist.map((item , index) => <Card key={index} taskObj={item} index={index} deleteTask = {deleteTask} updateListArray = {updateListArray} />)}
            </div>
            <Createtask modal={modal} toggle={toggle} save={saveTasklist} />
        </>
    );
}

export default Todolist;
