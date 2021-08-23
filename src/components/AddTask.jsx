import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button'

const AddTask = ({handleTaskAdition}) => {
    // Valor do input
    const [inputData, setInputData] = useState("") 

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAdition(inputData);
    }

    return (
        <div className='add-task-container'>
            <input 
                onChange={handleInputChange} 
                className='add-task-input' 
                value={inputData}
                type="text" />;
            <div className="add-task-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}
 
export default AddTask;