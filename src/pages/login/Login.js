import { ProConfigProvider, ProFormCheckbox, ProForm } from '@ant-design/pro-components';
import { Tabs, theme } from 'antd';
import { useState } from 'react';
import UserCreate from '../../components/users/UserCreate';
import LoginEmail from './LoginEmail';
import LoginPhone from './LoginPhone';

export default () => {
    const { token } = theme.useToken();
    const [loginType, setLoginType] = useState('register');

    return (
        <ProConfigProvider hashed={false}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: token.colorBgContainer,
                    padding: '0 20px',
                    borderRadius: 20,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '24px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: '10px',
                        }}
                    >
                        <video
                            src="/assets/images/logo.mp4"
                            width="70"
                            height="70"
                            autoPlay
                            loop
                            muted
                            style={{
                                borderRadius: '10%',
                            }}
                        />
                        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>YFA</span>
                    </div>

                    <Tabs
                        centered
                        activeKey={loginType}
                        onChange={(activeKey) => setLoginType(activeKey)}
                        tabBarStyle={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Tabs.TabPane key="account" tab="E-MAIL" />
                        <Tabs.TabPane key="phone" tab="PHONE" />
                        <Tabs.TabPane key="register" tab="SING UP" />
                    </Tabs>

                    {loginType === 'account' && <LoginEmail />}
                    {loginType === 'phone' && <LoginPhone />}
                    {loginType === 'register' && <UserCreate />}

                    <div
                        style={{
                            marginTop: '24px',
                        }}
                    >
                        <ProFormCheckbox noStyle name="autoLogin">
                            Remember me
                        </ProFormCheckbox>
                    </div>
                </div>
            </div>
        </ProConfigProvider>
    );
};
