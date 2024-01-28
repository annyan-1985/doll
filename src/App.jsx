import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import ItemSet from "./ItemSet";
import { Layout } from "antd";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./RelayEnvironment"; // Import your Relay Environment
import Doll from "./Doll";


const { Header, Content, Sider } = Layout; // Destructure Layout components

function App() {
  const [selectedClothing, setSelectedClothing] = useState(null);


  const items = [
    { id: 1, name: "hair1", url: "hair1.png" },
    { id: 2, name: "hair2", url: "hair2.png" },
    { id: 3, name: "hair3", url: "hair3.png" },
    { id: 4, name: "hair1", url: "hair1.png" },
    { id: 5, name: "hair2", url: "hair2.png" },
    { id: 6, name: "hair3", url: "hair3.png" },
    { id: 7, name: "hair1", url: "hair1.png" },
    { id: 8, name: "hair2", url: "hair2.png" },
    { id: 9, name: "hair3", url: "hair3.png" },
  ];

    return (
        <Layout>
            <Header className="app-header">Calendar Next Maker</Header>
            <Layout style={{ height: "80vh", overflowY: "hidden" }}>
                <Sider className="app-side">
                    <ItemSet
                        settype="hair"
                        items={items}
                        setSelectedClothing={setSelectedClothing}
                    />
                </Sider>
                <Content className="app-content">
                    <Doll selectedClothing={selectedClothing} />
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;