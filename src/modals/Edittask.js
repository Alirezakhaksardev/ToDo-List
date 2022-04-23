import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask}) => {
    
    const [taskname , setTaskname] = useState('');
    const [taskdescription , setTaskdescription] = useState('');

    const changeHandeler = (e) => {
        const {name , value} = e.target;
        switch (name) {
            case 'TaskName':
                return setTaskname(value);
            case 'description' :
                return setTaskdescription(value);
            default : return value;
        } 
    }

   

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskname;
        tempObj['description'] = taskdescription;
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskname} onChange = {changeHandeler} name = "TaskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {taskdescription} onChange = {changeHandeler} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;