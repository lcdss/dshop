import logo from './assets/images/logo.png';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Layout, Menu, Avatar, Dropdown, message, Button } from 'antd';

import AuthModal from './components/AuthModal';
import { useStoreActions, useStoreState } from './hooks';

const { Header, Footer, Content } = Layout;

const App: React.FC<RouteComponentProps> = ({ children }) => {
  const { loadAuth, logout } = useStoreActions(actions => actions.auth);
  const { isAuthenticated, avatarUrl } = useStoreState(state => state.auth);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    logout().then(() => {
      message.info('You have logged out');
    });
  };

  useEffect(() => {
    loadAuth()
      .then(() => {
        console.log('User authenticated');
      })
      .catch(() => {
        console.log('Guest user');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loadAuth]);

  if (loading) {
    return null;
  }

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
              <AuthModal />

              {isAuthenticated && (
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
                    </Menu>
                  }
                >
                  <Button type="link">
                    <Avatar src={avatarUrl} alt="Avatar" />
                  </Button>
                </Dropdown>
              )}
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
