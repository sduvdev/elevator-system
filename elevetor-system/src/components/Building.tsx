import React, { useState } from 'react';
import styled from 'styled-components';
import BuildingFactory from './BuildingFactory.tsx';

const BuildingWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 50px;
    border-style: solid;
`;

const FloorsWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
`;

const Building: React.FC = () => {
    const { numberOfFloors } = BuildingFactory.getConfig();
    const floors = Array.from({ length: numberOfFloors }, (_, index) => index + 1);
    const [currentFloor, setCurrentFloor] = useState<number>(1);

    const handleCallElevator = (floorNumber: number) => {
        const travelTime = Math.abs(currentFloor - floorNumber) * 500;
        setTimeout(() => {
            setCurrentFloor(floorNumber);
        }, travelTime);
    };

    return (
        <BuildingWrapper>
            <FloorsWrapper>
                {floors.map((floorNumber) => BuildingFactory.createFloor(floorNumber, handleCallElevator))}
            </FloorsWrapper>
            {BuildingFactory.createElevator(currentFloor)}
        </BuildingWrapper>
    );
};

export default Building;