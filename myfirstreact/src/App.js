import React from 'react';
import './App.css';
import CarouselComponent from "./components/carousel.component";

import Dropdown from 'react-dropdown';
import './style.css';

function App() {
  return (
    <div className="App">
	
		<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
   </Dropdown>
   
   
      <CarouselComponent />
    </div>
  );
}

export default App;
