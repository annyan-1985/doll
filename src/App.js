import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import ItemSet from "./ItemSet";

function App() {
  const [selectedClothing, setSelectedClothing] = useState(null);

  const handleClothingClick = (clothing) => {
    setSelectedClothing(clothing);
  };
  const items = [
    { id: 1, name: "hair1", url: "hair1.png" },
    { id: 2, name: "hair2", url: "hair2.png" },
    { id: 3, name: "hair3", url: "hair3.png" },
  ];

  return (
    <div>
      <Doll selectedClothing={selectedClothing} />
      <SelectedClothing clothing={selectedClothing} />
      <ItemSet
        settype="hair"
        items={items}
        handleitemclick={handleClothingClick}
      />
    </div>
  );
}

function Doll({ selectedClothing }) {
  return (
    <div className="doll-container">
      <div className="image-stack-container">
        <img
          className="image-stack-image image-stack-image-first"
          src="doll.jpg"
        />
        <img
          className="image-stack-image image-stack-image-second"
          src={selectedClothing}
        />
      </div>

      {selectedClothing && (
        <span className="selected-clothing">({selectedClothing})</span>
      )}
    </div>
  );
}

function SelectedClothing({ clothing }) {}

export default App;
