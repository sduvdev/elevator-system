import React from 'react';

interface FloorProps {
  floorNumber: number;
  onCallClick: (floor: number) => void;
}

const Floor: React.FC<FloorProps> = ({ floorNumber, onCallClick }) => {
  return (
      <div className="floor">
        <button className="button" onClick={() => onCallClick(floorNumber)}>
          {floorNumber}
        </button>
      </div>
  );
};

interface ElevatorProps {
  currentFloor: number;
}

const Elevator: React.FC<ElevatorProps> = ({ currentFloor }) => {
  const styles = {
    transform: `translateY(calc(-1 * 110px * (${currentFloor - 1})))`, // Adjust based on number of floors
  };

  return <div className="elevator" style={styles} />;
};

const ElevatorSystem: React.FC = () => {
  const [currentFloor, setCurrentFloor] = React.useState(1); // Initial floor

  const handleCallClick = (floor: number) => {
    // Implement logic to handle call requests and update currentFloor
    console.log(`Call button pressed for floor ${floor}`);
  };

  return (
      <div className="building">
        {Array(5).fill(0).map((_, index) => (
            <Floor key={index} floorNumber={index + 1} onCallClick={handleCallClick} />
        ))}
        <Elevator currentFloor={currentFloor} />
      </div>
  );
};

export default ElevatorSystem;