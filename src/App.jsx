import "./styles.css"; // Import the CSS file
import { Layout } from "antd";
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