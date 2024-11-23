import React from 'react';

import { Button, Input, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const FooterPage = () => {
    const { Footer } = Layout;

    return (
        <Footer style={{ textAlign: 'center' }}>
          You find All ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}

export default FooterPage;
