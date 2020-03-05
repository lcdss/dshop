import React, { useState } from 'react';
import { useStoreActions, useStoreState } from '../hooks';
import { Modal, Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Store } from 'rc-field-form/lib/interface';

type FormType = 'login' | 'register';

const AuthModal = () => {
  const { login, register } = useStoreActions(actions => actions.auth);
  const isAuthenticated = useStoreState(state => state.auth.isAuthenticated);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<FormType>('login');

  const handleLogin = ({ email, password }: Store) => {
    setLoading(true);

    login({ email, password })
      .then(() => {
        setLoading(false);
        setShowModal(false);
        message.success('You are logged in now');
      })
      .catch(() => {
        message.error('Invalid credentials! Please, try again');
      });
  };

  const handleRegister = ({ name, email, password }: Store) => {
    setLoading(true);

    register({ name, email, password })
      .then(() => {
        setLoading(false);
        setShowModal(false);
        message.success('Thank you for joining us');
      })
      .catch(() => {
        message.error('The e-mail is already taken');
      });
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setType('login');
          setShowModal(true);
        }}
      >
        Log in
      </Button>
      <Modal
        title={type === 'login' ? 'Log In' : 'Register'}
        visible={showModal}
        confirmLoading={loading}
        footer={null}
        destroyOnClose={true}
        onCancel={() => setShowModal(false)}
      >
        <Form onFinish={type === 'login' ? handleLogin : handleRegister}>
          {type === 'register' && (
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined />}
                placeholder="Name"
              />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail' }]}
          >
            <Input
              size="large"
              prefix={<MailOutlined />}
              type="email"
              placeholder="E-mail"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              {type === 'login' ? 'Log in' : 'Register'}
            </Button>
            <span style={{ marginLeft: '18px' }}>{' or '}</span>
            <Button
              type="link"
              size="large"
              onClick={() => setType(type === 'login' ? 'register' : 'login')}
            >
              {type === 'register' ? 'Log in' : 'Register'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AuthModal;
