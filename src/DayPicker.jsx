import React from "react";
import "./styles.css";
import {List, Card, Tabs} from 'antd';
import {useState, useRef, useEffect} from 'react';

import Doll from "./Doll"

const {TabPane} = Tabs;

const {Meta} = Card;
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const DayPicker = ({ initialSelectedIndex }) => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(initialSelectedIndex);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (selectedDayIndex >= 0 && selectedDayIndex <= 6) {
            const cardRef = document.getElementById(selectedDayIndex);
            cardRef.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [selectedDayIndex]);
    const handleTabChange = (key) => {
        if (key !== -1) {
            setSelectedDayIndex(key);
            const cardRef = document.getElementById(key);
            cardRef.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    useEffect(() => {
        // Update border styling after selectedDayIndex changes
        console.log("Card Color changed")
        const cards = document.querySelectorAll('.day-card');
        cards.forEach((card, index) => {
            if (index == selectedDayIndex) {
                card.style.border = '2px solid #1677ff';
            } else {
                card.style.border = 'none';
            }
        });
    }, [selectedDayIndex]);
    const cardWidth = 200; // Fixed width for each card
    const totalWidth = daysOfWeek.length * cardWidth; // Total width of the list

    return (
        <div style={{ overflowX: 'auto' }}>
            <List
                grid={{ gutter: 16, column: daysOfWeek.length, direction: 'horizontal' }} // Adjusted grid with direction set to horizontal
                dataSource={daysOfWeek}
                style={{ width: totalWidth}}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <Card className="day-card"
                              key={index}
                              id={index}
                              hoverable
                              style={{
                                  width: 200, // Adjust the width based on the number of columns
                                  height: 400,
                                  display: 'inline-block',
                                  margin: '0 10px',
                              }}
                              cover={<Doll/>}
                              onClick={() => setSelectedDayIndex(index)}
                        >
                            <Meta title={item}/>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );

}


export default DayPicker;