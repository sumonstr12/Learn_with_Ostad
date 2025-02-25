
import React from "react";  // ract import na korleo chole ai app.jsx bade baki componentse 
import Button from "./assets/components/button";
import { Button2 } from "./assets/components/button";
import { Button3 } from "./assets/components/button";
//import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonChildren from "./assets/components/buttonChildren";
import NiceCard from "./assets/components/niceCard";
//import NavBar from "./assets/components/navbar";
import Form from "./assets/components/form";


// button 2 click handler
// way_f 2: 
const clickHandler = () => {
  console.log("Button Clicked");
  alert("Button Clicked");
};
const App = () => {
  

  return (
    <div className="container">
      {/* <NavBar /> */}

      <h1>Hello, World!</h1>
      {/* akane object o pass kora jai */}
      <Button text="Button 1" id="abc" />


      {/* way_f 2: */}
      <Button2 smashButton={ clickHandler } />


      <Button3 text="Button 3" id="def" data={{ object_name:"Sumon" }} smashButton={ clickHandler } />

      {/* children passing to button component from app component  */}
      <ButtonChildren>
        <h1>Button 4</h1>
      </ButtonChildren>
      <br />
      <NiceCard color={"lightblue"}>
        <NiceCard color="red">
          <h1>Card 1</h1>
          <p>Nice Design !!</p>
        </NiceCard>
      </NiceCard>

      <Form />


    </div>


  );
};

export default App;