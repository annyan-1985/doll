import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

//render: return a ItemSet for user to click, when clicked, set the selected_item list here
class ItemSet extends React.Component {
  constructor(props) {
    super(props);
    const { settype, items, handleitemclick } = props;
    this.state = {
      settype: settype || "unknown",
      items: Array.isArray(items) ? items : [{ name: "null", url: "null" }],
      handleitemclick: handleitemclick,
    };
  }

  handleButtonClick = (url) => {
    this.state.selected = url;
  };

  // Generator an item list
  render() {
    return (
      <div className="scroll-list">
        {this.state.items.map((item) => (
          <img
            key={item.name}
            src={item.url}
            alt="Button"
            className="image-button"
            onClick={() => this.props.handleitemclick(item.url)}
          />
        ))}
      </div>
    );
  }
}

export default ItemSet;
