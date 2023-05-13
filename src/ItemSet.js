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

  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <div key={item.id}>
            <button
              dangerouslySetInnerHTML={{ __html: item.name }}
              onClick={() => this.props.handleitemclick(item.url)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ItemSet;
