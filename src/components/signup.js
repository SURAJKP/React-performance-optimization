import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';

export const App = () => { 
  const [state, setState] = useState();
  const [name, setName] = useState('');
  const [password, setPassword] = useState();
  const http = new XMLHttpRequest();
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const method = 'GET';
  http.open(method, url);
  useEffect(() => {
    http.onreadystatechange = () => {
      if(http.readyState === 4){
        const data = JSON.parse(http.responseText);
        const titles = data.map(item => <p>{item.title}</p>);
        setState(titles);
      }
    };
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  http.send();
  return (
    <div>
      <h3>Please Enter the your details</h3>
      <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
      >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your passowrd!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    </div>
  );
};
