import React, { useState } from 'react';
import { Button,Modal, ModalBody, ModalHeader , ModalFooter } from 'reactstrap';

const Createtask = ({modal,toggle,save}) => {

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
    const saveHandeler = async () => {
        let listObj = {};
        listObj["Name"] = taskname;
        listObj["description"] = taskdescription;
        await save(listObj);
        toggle()
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <from>
                        <div className="form-group">
                            <input type="text" value={taskname} className="form-control" placeholder="Enter Task Name" name="TaskName" onChange={changeHandeler} />
                        </div>
                        <div className="mt-3 form-group">
                            <textarea row="5" value={taskdescription} className="form-control" placeholder="Discription" name="description" onChange={changeHandeler} ></textarea>
                        </div>
                    </from>
                </ModalBody>
                <ModalFooter>
                <Button
                        color="primary"
                        onClick={saveHandeler}
                    >
                        Create
                    </Button>
                    {' '}
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Createtask;
