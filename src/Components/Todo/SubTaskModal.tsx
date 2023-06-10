import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

type Props = {
  setIsShow: (show: boolean) => void
  updateSubTaskTodo: (id: string, subTaskTodo: subTaskTodo | any) => void
  id: string
}

const SubTaskModal: React.FC<Props> = ({ setIsShow, updateSubTaskTodo, id }) => {
  const [subTaskData, setSubTaskData] = useState<subTaskTodo | {}>()

  const handleForm = (e: { currentTarget: { id: string; value: string; }; }): void => {
    setSubTaskData({
      ...subTaskData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const saveSubTask = () => {
    const subTaskInfo = { ...subTaskData };
    subTaskInfo.subTaskId = Date.now().toString();
    subTaskInfo.status = false;
    updateSubTaskTodo(id, subTaskInfo);
    setIsShow(false)
  }

  return (
    <Modal show={true} centered onHide={() => setIsShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Title for Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='Form'>
          <div style={{ flexDirection: 'column', alignItems: 'baseline' }}>
            <div>
              <label htmlFor='subTaskName'>Name</label>
              <input type='text' onChange={handleForm} id='subTaskName' />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <label htmlFor='subTaskDescription'>Description</label>
              <textarea onChange={handleForm} id='subTaskDescription' />
            </div>
          </div>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsShow(false)}>Close Modal</Button>
        <Button variant="primary" onClick={() => saveSubTask()} disabled={subTaskData === undefined ? true : false}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SubTaskModal; 