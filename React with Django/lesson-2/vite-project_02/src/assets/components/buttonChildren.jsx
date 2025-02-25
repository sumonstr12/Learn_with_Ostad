import React from "react";


const ButtonChildren = ({ children }) => {
    return (
        <div>
            <button>
                {children}
            </button>
            <br />
        </div>
    );
};


export default ButtonChildren;