import React from "react";
import "./styles.css";
import {Card, Tabs} from 'antd';
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

    return (
        <div>
            <Tabs activeKey={selectedDayIndex} onChange={handleTabChange} tabBarStyle={{marginBottom: 16}}>
                {daysOfWeek.map((day, index)=> (
                    <TabPane tab={day} key={index}/>
                ))}
            </Tabs>
            <div ref={scrollRef} style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                {daysOfWeek.map((day, index) => (
                    <Card className="day-card"
                        key={index}
                        id={index}
                        hoverable
                        style={{
                            width: 200,
                            height: 400,
                            display: 'inline-block',
                            margin: '0 10px',
                        }}
                        cover={<Doll/>}
                    >
                        <Meta title={day}/>
                    </Card>
                ))}
            </div>
        </div>
    );

}


export default DayPicker;