import React from 'react';
import MySider from '../../component/sider/sider';
import MyChart from '../chart/chart';
import MyTable from '../table/table';
import {Route} from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
  

import './home.css';

const { Sider, Content } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.push({
            pathname: '/home/table',
        })
    }

    render () {
        return (
            <Layout>
                <Sider className="sider">
                    <MySider />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>subnav 1</Breadcrumb.Item>
                        <Breadcrumb.Item>option1</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }} id="mountNode">
                            <Route path="/home/table" component={MyTable}/>
                            <Route path="/home/chart" component={MyChart}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;