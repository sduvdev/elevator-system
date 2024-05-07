import Building from './Building';
import Floor from './Floor';
import Elevator from './Elevator';
import { BuildingConfig } from './config';

interface BuildingFactoryConfig {
    numberOfFloors: number;
    floorHeight: number;
}

class BuildingFactory {
    createBuilding(): JSX.Element {
        return <Building />;
    }

    createFloor(floorNumber: number, onCallElevator: (floorNumber: number) => void): JSX.Element {
        const { floorHeight } = BuildingConfig;
        return <Floor key={floorNumber} floorNumber={floorNumber} floorHeight={floorHeight} onCallElevator={onCallElevator} />;
    }

    createElevator(currentFloor: number): JSX.Element {
        const { floorHeight, numberOfFloors } = BuildingConfig;
        return <Elevator currentFloor={currentFloor} floorHeight={floorHeight} numberOfFloors={numberOfFloors} />;
    }

    getConfig(): BuildingFactoryConfig {
        return BuildingConfig;
    }
}

export default new BuildingFactory();
