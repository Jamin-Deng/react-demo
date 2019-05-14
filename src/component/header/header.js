import React from 'react';
import { Menu } from 'antd';

function MyHeader() {
  return (
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>
            <Menu.Item key="1"><a href='#/'>首页</a></Menu.Item>
            <Menu.Item key="2"><a href='#/detail'>关于</a></Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  );
}

export default MyHeader;