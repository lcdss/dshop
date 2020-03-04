import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Store } from 'rc-field-form/lib/interface';

type FormType = 'login' | 'register';

const AuthModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<FormType>('login');

  const handleSubmit = (values: Store) => {
    console.log('Received values of form: ', values);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 2000);
  };

  return (
    <>
      <Button type="primary" onClick={() => setShowModal(true)}>
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
        <Form onFinish={handleSubmit}>
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
