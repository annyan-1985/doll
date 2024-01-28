import React from "react";

const Doll = ({ selectedClothing }) => {
    console.log("Clicked clothing:", selectedClothing);
    return (
        <div className="doll">
            {selectedClothing && (
                <img src={selectedClothing}/>
            )}
            {!selectedClothing && <p>Please select a clothing item</p>}
        </div>
    );
};

export default Doll;