import React from 'react';
import './App.css';
import CarouselComponent from "./components/carousel.component";

import Dropdown from 'react-dropdown';
import './style.css';


const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
<Dropdown options={options}  value={defaultOption} placeholder="Select an option" />;


function App() {
  return (
    <div className="App">
	
	<Dropdown className='myClassName' />;
   
   
      <CarouselComponent />
    </div>
  );
}

export default App;
