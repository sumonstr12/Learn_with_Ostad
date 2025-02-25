

import React from "react";

// here text passed as props to Button component( Object destructuring)

// standard way to pass props
const Button = ({ text }) => {
    // bujhar upay
    // console.log(props);
    return (
        <div>
            <br />
            <button className="btn btn-success">{text}</button>
            <p >Button1 id : {text.id}</p> 
            {/* akhane button id pabo na, blank thakbe
                karon text direct object variables hisebe pass kora hoise 
                tai dheka jabena  
            */}

        </div>
        
    );
};

// another way to pass props
// here text passed as props to Button component
const Button3 = (props) => {
    // bujhar upay
    // console.log(props);

    // button 1 er moto na kore onno vabeo kora jai atao akta way

    // way 1:
    // const button_name = props.text;
    // const button_id = props.id;


    // pros object ta dekte anekta amn
        // props{
        //     text: "Button 3",
        //     id: "def"    }

    
    // way 2:
    // motamoti standard 
    // but amn korle j name e pass korsi must be seta use korte hobe
    const { text, id, data , smashButton} = props;
    return (
        <div>
            <br />
            <button className="btn btn-warning" onClick={smashButton}>{text}</button>
            <p>Button 3 ID : {id}</p>
            { /*object er data show korar jonno
            object er property name use korte hobe akane object_name use kora hoise 
            karon akhane  object er property name object_name */ }
            <p>Button 3 data : {data.object_name}</p>
        </div>

    );
};

const Button2 = ({smashButton}) => {

    // event hundling er process
    // 1. create a function 
    // way_f 1:
    // const clickHandler = () => {
    //     alert("Button 2 Clicked");
    // };

    return (
        <div>
            <br />
            <button className="btn" onClick={smashButton}>Button 2</button>
        </div>
    );
};

export default Button;
export { Button2 };
export { Button3 };