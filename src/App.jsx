import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import ItemSet from "./ItemSet";
import { Layout } from "antd";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./RelayEnvironment"; // Import your Relay Environment
import Doll from "./Doll";
import Outfit from "./Outfit"


const { Header, Content, Sider } = Layout; // Destructure Layout components

function App() {
    const [selectedClothing, setSelectedClothing] = useState(null);
    const [outfit, setOutfit] = useState({
        hair: 1,
        dress: 1,
        shoe: 1
    });

    // Function to update a specific item in the outfit
    const updateOutfitItem = (item, value) => {
        console.log(`Set outfit ${item}, ${value}`);
        setOutfit(prevOutfit => ({
            ...prevOutfit,
            [item]: value
        }));
    };

    return (
        <Layout>
            <Header className="app-header">Calendar Next Maker</Header>
            <Layout style={{ height: "80vh", overflowY: "hidden" }}>
                <Sider className="app-side">
                    <ItemSet
                        setSelectedClothing={updateOutfitItem}
                    />
                </Sider>
                <Content className="app-content">
                    <div className="doll-container">
                        <div className="image-stack-container">
                            <Doll/>
                            <Outfit userSettings={outfit}/>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
);
}

export default App;