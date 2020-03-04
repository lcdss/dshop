import logo from './assets/images/logo.png';
import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Layout, Menu, Avatar, Dropdown, message, Button } from 'antd';

import AuthButton from './components/AuthButton';

const { Header, Footer, Content } = Layout;

const App: React.FC<RouteComponentProps> = ({ children }) => {
  const handleUserMenuClick = ({ key }: { key: string }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            style={{ paddingRight: 50 }}
            height="40"
            alt="DShop Logo"
          />
          <div
            style={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'space-between',
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Shops</Menu.Item>
            </Menu>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
              <AuthButton />
              <Dropdown
                overlay={
                  <Menu onClick={handleUserMenuClick}>
                    <Menu.Item key="3">Logout</Menu.Item>
                  </Menu>
                }
              >
                <Button type="link">
                  <Avatar src="https://gravatar.com/avatar?d=mp" />
                </Button>
              </Dropdown>
            </Menu>
          </div>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        DSHOP @2020 Created by lcdss
      </Footer>
    </Layout>
  );
};

export default App;
