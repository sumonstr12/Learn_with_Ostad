
import { useEffect, useRef } from 'react';
import { Hook } from './assets/components/hook';



const App = () => {

  

  // useRef hook
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const reactvite = useRef(null);
  const inputRef = useRef(null);

  // aita const App er baireo likha jai,
  // and doitai same kajei korbe but but vitore likhle error hoi na akdom
  // best practice holo vitore likha 
  const clickHandler = () => {
    //alert('I am clicked')
    // ata diye buja jabe seta kon tag k mention kortese as a object
    console.log(headingRef.current)
    // shudu headingRef dile seta object hisabe asbe



    // headingRef use korar way
    headingRef.current.innerHTML = "Tithy Loves Sumon more and more..";
    headingRef.current.style.color = "lightblue";

    // subtitleRef use korar way
    subtitleRef.current.innerHTML = "So Hot Love story...";
    subtitleRef.current.style.color = "green";


    // reactvite use korar way
    reactvite.current.querySelector('h2').textContent = 'Vite';
    // const text = node.textContent;; = "Vite";
    reactvite.current.querySelector("img").src = "/vite.svg";

    alert('Input value is - ' + inputRef.current.value);
  }

  const focusHandler = () => {
      inputRef.current.focus();
  }

  return (
    <div>
      {/* dom manipulate */}
      <h1 ref={headingRef}>Sumon Loves tithy..</h1>
      <h2 ref={subtitleRef}>So cute Love story...</h2>

      <label htmlFor="inputRef">Name : </label><br />
      <input type="text" ref={inputRef} placeholder='Enter something ..' />

      <div ref={reactvite}>
        <h2>React</h2>
        <img src="src\assets\react.svg" />
      </div>
      <button onClick={ clickHandler }>Click to change</button><br /><br />
      <button onClick={ focusHandler }>Click to Change Focus</button><br /><br />
      <button onClick={ clickHandler }>Alert input - </button>
      <Hook />
    </div>
  )
}

export default App


// dom manipulate mane hosse ami button e click korle h1 tag er vitor ja ase ta change hbe
// aitar jnno useRef use korte hbe