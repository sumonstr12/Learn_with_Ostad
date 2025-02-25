
import React from 'react'
import { use } from 'react';
import { useRef, useEffect } from 'react'

export const Hook = () => {

    // useRef hook
    const useDivdata = useRef(null);


    // useEffect hook uses
    // const App er vitor joto gula kaj hbe sob kaj sesh hobar por useEffect kaj korbe 
    // atai useEffect er niyom
    useEffect(() => {
        //console.log('useEffect called')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data)) // ata diye console e data dekha jabe

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            useDivdata.current.innerText = JSON.stringify(data);
        })

    }, []);

  return (
    <div>
        <h1>Sumon Make Attention Properly !</h1>
        {/* loading tkn dheka jabe jodi speed slow thake (3g) */}
        <div ref={ useDivdata }>Loading.... </div>
    </div>
  )
}
