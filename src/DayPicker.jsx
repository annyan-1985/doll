import React from "react";
import "./styles.css";
import { Card } from 'antd';
import Doll  from "./Doll"

const { Meta } = Card;

const DayPicker = () => (
    <Card
        hoverable
        style={{ width: 200 ,height: 400}}

        cover={<Doll/>}
    >
        <Meta title="Monday" />
    </Card>
);


export default DayPicker;