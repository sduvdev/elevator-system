# (classDiagram)

    class Building {
        +floors: Floor[]
        +elevators: Elevator[]
        +numFloors: number
        +numElevators: number
        +addFloor(floor: Floor): void
        +addElevator(elevator: Elevator): void
        +callElevator(floorNum: number): void
        +update(): void
    }

    class Floor {
        +floorNum: number
        +callButton: HTMLButtonElement
        +display: HTMLElement
        +callElevator(): void
        +updateDisplay(timeRemaining: number): void
    }

    class Elevator {
        +currentFloor: number
        +destinationFloor: number
        +direction: string
        +isIdle: boolean
        +move(): void
        +arrivedAtFloor(): void
        +openDoors(): void
        +closeDoors(): void
    }

    class ElevatorController {
        +building: Building
        +handleElevatorCall(floorNum: number): void
        +assignElevator(floorNum: number): void
        +moveElevators(): void
    }

    Building *-- Floor
    Building *-- Elevator
    ElevatorController -- Building