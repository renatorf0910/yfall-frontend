import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const SiderPage = () => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);


    const itemsOp = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={itemsOp} />
        </Sider>
    )
}

export default SiderPage;
