import React from "react";
import Item from "./Item";
import { List, Tabs } from "antd";



class ItemSet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCategory: "hair" // Initial category
        };
    }

    handleTabChange = (key) => {
        // Update the currentCategory state when a tab is clicked
        const categories = ["hair", "dress", "top", "bottom", "shoes"];
        const selectedCategory = categories[key - 1]; // Adjust the index to match the categories array
        this.setState({ currentCategory: selectedCategory });
    };
    render() {
        const { settype, items, setSelectedClothing } = this.props; // Correct prop name
        const { currentCategory } = this.state;

        const categories = [
            { name: "Hair" },
            { name: "Dress" },
            { name: "Top" },
            { name: "Bottom" },
            { name: "Shoes" }
        ];
        return (
            <Tabs tabPosition="left" type="card" centered={true} onChange={this.handleTabChange}>
                {categories.map((category, i) => {
                    const id = String(i + 1);
                    return (
                        <Tabs.TabPane key={id} tab={category.name}>
                            <List
                                key={id}
                                grid={{ gutter: 10, column: 1 }}
                                itemLayout="vertical"
                                dataSource={[1, 2]}
                                renderItem={(itemKey) => (
                                    <Item
                                        itemKey={itemKey}
                                        currentCategory={currentCategory}
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