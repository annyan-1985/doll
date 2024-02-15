import React from "react";
import "./styles.css";
import {List, Card, Tabs} from 'antd';
import {useState, useRef, useEffect} from 'react';

import Doll from "./Doll"
import Outfit from "./Outfit";
import Draggable from 'react-draggable';

const {TabPane} = Tabs;

const {Meta} = Card;
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const DayPicker = ({ initialSelectedIndex, updateSelectedDay, userSettings }) => {

    const [selectedDayIndex, setSelectedDayIndex] = useState(initialSelectedIndex);
    const scrollRef = useRef(null);


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
    const handleDrag = (event, data) => {
        // 根据拖动的距离调整滚动条的位置
        const scrollRef = document.getElementById('scrollContainer');
        scrollRef.scrollLeft -= data.deltaX;
    };
    return (
        <div id="scrollContainer" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <Draggable axis="x" onDrag={handleDrag}>
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
                                  draggable={false}
                                  style={{
                                      width: cardWidth, // Adjust the width based on the number of columns
                                      height: 400,
                                      display: 'inline-block',
                                      margin: '0 10px',
                                  }}
                                  cover={<div>
                                      <Doll/>

                                  </div>}
                                  onClick={() => setSelectedDayIndex(index)}
                            >
                                <Meta title={item}/>
                            </Card>
                        </List.Item>
                    )}
                />
            </Draggable>

        </div>
    );

}


export default DayPicker;