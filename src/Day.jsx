import React, { useEffect, useState } from "react";
import "./styles.css"; // Import the CSS file
import ItemSet from "./ItemSet";
import { Layout } from "antd";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./RelayEnvironment"; // Import your Relay Environment
import Doll from "./Doll";
import Outfit from "./Outfit"


const { Header, Content, Sider } = Layout; // Destructure Layout components

const Day = ({outfit, updateOutfit})=>{
    //const [selectedClothing, setSelectedClothing] = useState(null);

    // Function to update a specific item in the outfit
    const updateOutfitItem = (item, value) => {
        console.log(`Set outfit ${item}, ${value}`);
        updateOutfit({
            ...outfit,
            [item]: value
        })
    };

    return (
        <Layout >
            <Layout >
                <Sider>
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

export default Day;