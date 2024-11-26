import React from 'react';

import { Button, Input, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const HeaderPage = () => {

    const { Header } = Layout;

    const items1 = ['1', '2', '3'].map((key) => ({
        key,
        label: `ITEM ${key}`,
    }));

    const { Search } = Input;
    const navigate = useNavigate();


    const handleLoginClick = () => {
        navigate('/login');
      };
    

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{ flex: 1, minWidth: 0 }}
            />
            <Button type="primary" onClick={handleLoginClick}>
                Login
            </Button>
        </Header>
    )
}

export default HeaderPage;
