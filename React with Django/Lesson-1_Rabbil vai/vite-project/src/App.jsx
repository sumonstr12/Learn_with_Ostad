import React from "react";
import Sumon from "./assets/components/sumon";

const App = () => {

  let age = 12
  return (
    <div>
      <Sumon/>


      <h1>Hello, React 18!</h1>
      <h1>{ "I'm a worst person" }</h1>
      <p>{2 * 7}</p>
      <h2>{new Date().getDay()}</h2>

      {/* multi liner jnno/ multiline javascript er jnno (IIF function) */}
      <p>
        {
          (()=>{
            let a = 10;
            let b = 10;
            return <h2>{"Sumon roy - "}{a + b}</h2>
          })()
        }
      </p>
      {/* condition */}
      <h1>{age>18?("I'm adult"):("I'm child")} </h1>


      {/* loops chalano */}
      <p>
        {
          (()=>{
            let arr = [1, 2, 3, 4, 5];
            return arr.map((elem, index)=>{
              return <h2 key={index}>number : {elem}</h2>
            })
          })()
        }
      </p>


    </div>
  );
};

export default App;