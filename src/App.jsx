import React, { useCallback, useState } from "react";
import "./styles.css"; // Import the CSS file
import { Layout } from "antd";
import Day from "./Day"
import DayPicker from "./DayPicker"
import { type } from "@testing-library/user-event/dist/type";


const { Header, Content, Sider } = Layout; // Destructure Layout components

function App() {
    const [selectedDay, setSelectedDay] = useState('Wednesday');
    const [userSettings, setUserSettings] = useState({});

    const defaultOutfit = {
        hair: 1,
        dress: 1,
        shoe: 1
    }
    const updateOutfit = useCallback((outfit) => {
        setUserSettings(prevSettings => {
            return { ...prevSettings, [selectedDay]: outfit };
        });
    }, [selectedDay])

    return (
        <Layout>
            <Day outfit={userSettings[selectedDay] || defaultOutfit} updateOutfit={updateOutfit}/>
            <DayPicker initialSelectedDay={'Wednesday'} updateSelectedDay={setSelectedDay} userSettings={userSettings}/>
        </Layout>

    );
}

export default App;