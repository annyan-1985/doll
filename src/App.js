import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import ItemSet from "./ItemSet";
import { Layout, Space, FloatButton, Drawer   } from 'antd';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [selectedClothing, setSelectedClothing] = useState(null);

  const handleClothingClick = (clothing) => {
    setSelectedClothing(clothing);
  };
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
      <Header className="app-header">
        Calendar Next Maker
      </Header>
      <Layout style={{
        height: "80vh",
        overflowY: "scroll",
      }}>
        <Content className="app-content">
          <Doll selectedClothing={selectedClothing} />
          <SelectedClothing clothing={selectedClothing} />
        </Content>
        <Sider className="app-side">
          <ItemSet
            settype="hair"
            items={items}
            handleitemclick={handleClothingClick}
          />
        </Sider>
      </Layout>
    </Layout>
  );
}

function Doll({ selectedClothing }) {
  return (
    <div className="doll-container">
      <div className="image-stack-container">
        <img
          className="image-stack-image image-stack-image-first"
          src="doll.jpg"
        />
        <img
          className="image-stack-image image-stack-image-second"
          src={selectedClothing}
        />
      </div>

      {selectedClothing && (
        <span className="selected-clothing">({selectedClothing})</span>
      )}
    </div>
  );
}

function SelectedClothing({ clothing }) {}

export default App;
