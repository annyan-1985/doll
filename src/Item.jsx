import React, {useState} from "react";
import {Image, List, Tabs} from "antd";
class Item extends React.Component {
    handleItemClick = () => {
        console.log("handleItemClick clicked");
        const { item, setSelectedClothing } = this.props;
        setSelectedClothing(item.url);
    };

    render() {
        const { item } = this.props;
        return (
            <List.Item onClick={this.handleItemClick}>
                <Image width={100} src={item.url} preview={false} />
                {item.name}
            </List.Item>
        );
    }
}
export default  Item;
