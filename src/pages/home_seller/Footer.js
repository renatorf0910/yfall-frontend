import React from 'react';

import { Layout } from 'antd';

const FooterPage = () => {
    const { Footer } = Layout;

    return (
        <Footer style={{ textAlign: 'center' }}>
          You find All ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}

export default FooterPage;
