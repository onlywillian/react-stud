import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container" onClick={handleBackClick}>
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Voluptatibus accusantium rerum id neque quia voluptatum.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;