import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import { Button, Space, Tooltip, Image, List, Tabs  } from 'antd';

//render: return a ItemSet for user to click, when clicked, set the selected_item list here
class ItemSet extends React.Component {
  constructor(props) {
    super(props);
    const { settype, items, handleitemclick } = props;
    this.state = {
      settype: settype || "unknown",
      items: Array.isArray(items) ? items : [{ name: "null", url: "null" }],
      categories: [{
        name: "Hair"
      }, {
        name: "Dress"
      }, {
        name: "Top"
      }, {
        name: "Bottom"
      }, {
        name: "Shoes"
      }],
      handleitemclick: handleitemclick,
    };
  }

  handleButtonClick = (url) => {
    this.state.selected = url;
  };

  // Generator an item list
  render() {
    return (
      <Tabs
        tabPosition={"left"}
        type="card"
        centered={true}
        items={this.state.categories.map((category, i) => {
          const id = String(i + 1);
          return {
            label: category.name,
            key: id,
            children: (
              <List grid={{
                gutter: 10,
                column: 1
              }}
              itemLayout={"vertical"}
                dataSource={this.state.items}
                renderItem={(item => (
                  <List.Item key={item.id}
                    onClick={() => this.props.handleitemclick(item.url)}
                    >
                    <Image
                      width={100} src={item.url} preview={false}/>
                    {item.name}
                  
                  </List.Item>
                ))}
              />),
          };
        })}
      />
    );
  }
}

export default ItemSet;
