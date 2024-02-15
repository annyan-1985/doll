import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import { Layout } from "antd";
import Day from "./Day"
import DayPicker from "./DayPicker"


const { Header, Content, Sider } = Layout; // Destructure Layout components

function App() {
    const [selectedDay, setSelectedDay] = useState(3);
    const [userSettings, setUserSettings] = useState({});


    const updateOutfit = (outfit) => {
        setUserSettings(prevSettings => {
            return { ...prevSettings, [selectedDay]: outfit };
        });
    };
    const updateSelectedDay = (dayIndex) => {
        setSelectedDay(dayIndex)
    };

    return (
        <Layout>
            <Day initialSelectedIndex= {selectedDay} updateOutfitForDay = {updateOutfit}/>
            <DayPicker updateSelectedDay = {updateSelectedDay}/>
        </Layout>

    );
}

export default App;