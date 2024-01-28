import React from "react";
import Item from "./Item";
import { List, Tabs } from "antd";



class ItemSet extends React.Component {

    render() {
        const { settype, items, setSelectedClothing } = this.props; // Correct prop name
        const categories = [
            { name: "Hair" },
            { name: "Dress" },
            { name: "Top" },
            { name: "Bottom" },
            { name: "Shoes" }
        ];
        return (
            <Tabs tabPosition="left" type="card" centered={true}>
                {categories.map((category, i) => {
                    const id = String(i + 1);
                    return (
                        <Tabs.TabPane key={id} tab={category.name}>
                            <List
                                key={id}
                                grid={{ gutter: 10, column: 1 }}
                                itemLayout="vertical"
                                dataSource={items}
                                renderItem={(item) => (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        setSelectedClothing={setSelectedClothing} // Correct prop name
                                    />
                                )}
                            />
                        </Tabs.TabPane>
                    );
                })}
            </Tabs>
        );
    }
}

export default ItemSet;