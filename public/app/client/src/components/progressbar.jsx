import React from 'react';
import { ProgressBar } from "react-bootstrap";

const ProgressBarComponent = ({ progress }) => {
    return (
        <div>
            <ProgressBar now={progress} label={`${progress}%`} />
        </div>
    )
}

export default ProgressBarComponent;