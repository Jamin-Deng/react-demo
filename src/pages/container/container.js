import React from 'react';
import './container.css';
// import axios from 'axios';
import { Layout } from 'antd';
import MyHeader from '../../component/header/header';
import Router from '../../router/router';

// axios.get('/api/DataOne').then((res) => {
//     if(res.status == 200){
//        console.log(res.data.dataSource)
//     }
// })

const { Header, Sider, Content } = Layout;

function Container() {
  return (
    <Layout className="home">
        <Header className="header">
            <div className="logo"> <img className="uepay" src={require('../../images/logo_uepay.png')} />运营后台管理系统</div>
            <MyHeader />
        </Header>
        <Router />
    </Layout>
  );
}

export default Container;
