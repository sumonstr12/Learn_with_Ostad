
import React from "react";


const NiceCard = ({ color,children }) => {
    return (
        <div className="card"
        style={{ 
            backgroundColor: color, 
            padding: "20px",
        }}
        >
            <br />
            {children}
        </div>
    );
};

export default NiceCard;