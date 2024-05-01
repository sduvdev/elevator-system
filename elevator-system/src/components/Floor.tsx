import React from 'react';
import { floorStyles } from '../App.styles'
interface FloorProps {
    floorNum: number;
}

const Floor: React.FC<FloorProps> = ({ floorNum }) => {
    const callElevator = () => {
        // Logic to call the elevator
    };

    return (
        <div className="floor">
            <button onClick={callElevator}>Call Elevator</button>
            <span>Floor {floorNum}</span>
        </div>
    );
};

export default Floor;