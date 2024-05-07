import './App.css'
import buildingFactory from "./components/BuildingFactory.tsx";
function App() {

  return (
    <>
        {buildingFactory.createBuilding()}
    </>
  )
}

export default App
