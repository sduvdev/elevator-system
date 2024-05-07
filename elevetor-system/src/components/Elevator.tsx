import React from 'react';
import styled from 'styled-components';
import elvImage from '../assets/elv.svg';

type ElevatorProps = {
    currentFloor: number;
    floorHeight: number;
    numberOfFloors: number;
};

const ElevatorShaftWrapper = styled.div<{ numberOfFloors: number; floorHeight: number }>`
    margin: 7px;
`;

const ElevatorImage = styled.img<{ currentFloor: number; floorHeight: number }>`
    width: 100%;
    bottom: ${({ currentFloor, floorHeight }) => (currentFloor - 1) * floorHeight}px;
    height: ${({ floorHeight }) => floorHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: bottom 0.5s ease-in-out;
`;

const Elevator: React.FC<ElevatorProps> = ({ currentFloor, floorHeight, numberOfFloors }) => {
    return (
        <ElevatorShaftWrapper numberOfFloors={numberOfFloors} floorHeight={floorHeight}>
            <ElevatorImage currentFloor={currentFloor} floorHeight={floorHeight} src={elvImage} alt="תמונת המעלית" />
        </ElevatorShaftWrapper>
    );
};

export default Elevator;