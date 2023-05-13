import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

function App() {
  const [selectedClothing, setSelectedClothing] = useState(null);

  const handleClothingClick = (clothing) => {
    setSelectedClothing(clothing);
  };

  return (
    <div>
      <Doll selectedClothing={selectedClothing} />
      <ClothList handleClothingClick={handleClothingClick} />
      <SelectedClothing clothing={selectedClothing} />
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
          src="hair.png"
        />
      </div>

      {selectedClothing && (
        <span className="selected-clothing">({selectedClothing})</span>
      )}
    </div>
  );
}

function ClothList({ handleClothingClick }) {
  const items = [
    { id: 1, name: "Uniform1", description: "This is item 1." },
    { id: 2, name: "Uniform2", description: "This is item 2." },
    { id: 3, name: "Uniform3", description: "This is item 3." },
  ];

  const handleButtonClick = (name) => {
    handleClothingClick(name);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <button
            dangerouslySetInnerHTML={{ __html: item.name }}
            onClick={() => handleButtonClick(item.name)}
          />
        </div>
      ))}
    </div>
  );
}

function SelectedClothing({ clothing }) {
  return <div>Selected Clothing: {clothing}</div>;
}

export default App;
