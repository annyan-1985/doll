import React, {useState} from "react";
import {Image, List, Tabs} from "antd";
class Item extends React.Component {
    handleItemClick = () => {
        console.log("handleItemClick clicked");
        const { itemKey, setSelectedClothing, currentCategory } = this.props;
        setSelectedClothing(currentCategory, itemKey);
    };

    render() {
        const { itemKey, setSelectedClothing, currentCategory } = this.props;
        return (
            <List.Item onClick={this.handleItemClick}>
                <Image width={100} src={`${currentCategory}${itemKey}.png`} preview={false} />
            </List.Item>
        );
    }
}
export default  Item;
