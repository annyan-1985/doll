import React, { useState } from "react";

const Outfit = ({ userSettings }) => {
    return (
        <div className="looks">
            <div className="outfit-items">
                <div>
                    {userSettings?.dress !== undefined && (
                    <img src={`dress${userSettings.dress}.png`} alt="Selected clothing"
                         className="image-stack-image image-stack-image-second"/>
                    )}
                    {userSettings?.hair !== undefined && (
                    <img src={`hair${userSettings.hair}.png`} alt="Selected Hair"
                         className="image-stack-image image-stack-image-second"/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Outfit;