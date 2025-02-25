
import React from "react";

const Sumon = () => {
    return (
        <div>
            <h1>Sumon</h1>
            <h2>Tithy</h2>
            {/* ata sortcut hisabe likha jay */}
            <button onClick={()=>{alert("Sumon Loves Tithy")}}>LoveS</button>
            {/* traditional way: */}
            {/* <button onClick={function(){alert("Sumon Loves Tithy")}}>Love</button
            */}
            <br/>
            <br/>
            <button className="btn btn-success" onClick={()=>{alert("Tithy Loves Sumon")}}>LoveT</button>
        </div>
        
    );

};

export default Sumon;


// template: 

// import React from "react";

// const file_name = () => {
//     return (
//         <div>
//             // ja kisu show korate chai
//         </div>
//     );

// };

// export default file_name;

// // file_name er first letter capital letter hobe