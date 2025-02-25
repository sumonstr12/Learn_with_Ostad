
import React,{useState} from 'react'


const App = () => {

  // simple number er khetre
  const [number, setNumber] = useState(2)

  // object er khetrre
  const [vote , setVote] = useState({groupA:0, groupB:0, groupC:0})

  // increment korar function
  const Increment = () => {
    console.log(number)
    setNumber(number + 1)
    
  }


  const addVote = (group) => {
    if(group === 'A'){
      setVote({...vote, groupA: vote.groupA + 1})
    }
    if(group === 'B'){
      setVote({...vote, groupB: vote.groupB + 1})
    }
    if(group === 'C'){
      setVote({...vote, groupC: vote.groupC + 1})
    }
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increment}>Increment</button><br /><br />
      {/* Increment function er moto na likhe avabeo korea jai */}
      <button onClick={() => setNumber(number - 1)}>Decrement</button>


      <h1>GroupA vote : { vote.groupA }</h1>
      <h1>GroupB vote : { vote.groupB }</h1>
      <h1>GroupC vote : { vote.groupC }</h1>


      <button onClick={() =>  addVote("A")}>Vote A</button>    
      <button onClick={() =>  addVote("B")}>Vote b</button>
      <button onClick={() =>  addVote("C")}>Vote C </button>
          


    </div>
  )
}

export default App