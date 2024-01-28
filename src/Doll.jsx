import React from "react";
import "./styles.css";

const Doll = ({ selectedClothing }) => {
    console.log("Clicked clothing:", selectedClothing);
    return (
        <div className="doll-container">
            {selectedClothing && (
                <div className="image-stack-container">
                    <img src={selectedClothing} alt="Selected clothing"
                         className="image-stack-image image-stack-image-second"/>
                    <img src="doll.jpg" alt="Doll"
                         className="image-stack-image image-stack-image-first"/> {/* Render doll.png underneath selectedClothing */}
                </div>
            )}
            {!selectedClothing && <p>Please select a clothing item</p>}
        </div>
    );
};

export default Doll;