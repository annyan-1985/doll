import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import ItemSet from "./ItemSet";
import { Layout } from "antd";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./RelayEnvironment"; // Import your Relay Environment
import Day from "./Day"
import DayPicker from "./DayPicker"


const { Header, Content, Sider } = Layout; // Destructure Layout components

function App() {


    return (
        <Layout>

            <Day/>



            <DayPicker/>



        </Layout>

    );
}

export default App;