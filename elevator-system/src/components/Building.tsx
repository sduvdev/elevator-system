import React from 'react';
import Floor from './Floor';
import Elevator from './Elevator';

interface BuildingProps {
    numFloors: number;
    numElevators: number;
}

const Building: React.FC<BuildingProps> = ({ numFloors, numElevators }) => {
    const floors = Array.from({ length: numFloors }, (_, index) => (
        <Floor key={index} floorNum={index + 1} />
    ));

    const elevators = Array.from({ length: numElevators }, (_, index) => (
        <Elevator key={index} />
    ));

    return (
        <div className="building">
            {floors}
            {elevators}
        </div>
    );
};

export default Building;