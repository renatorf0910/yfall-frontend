import {
    LoginForm,
    ProConfigProvider,
    ProFormCheckbox
} from '@ant-design/pro-components';
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
            <div style={{ backgroundColor: token.colorBgContainer }}>
                <LoginForm
                    title={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <video
                                src="/assets/images/logo.mp4"
                                width="70"
                                height="150"
                                autoPlay
                                loop
                                muted
                                style={{ borderRadius: '20%', marginRight: '1px' }}
                            />
                            YFA
                        </div>
                    }
                    submitter={false}
                >
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
                    {loginType === 'account' && (
                        <LoginEmail />
                    )}
                    {loginType === 'phone' && (
                        <LoginPhone />
                    )}
                    {loginType === 'register' && (
                        <UserCreate />
                    )}
                    <div
                        style={{
                            marginBlockEnd: 24,
                        }}
                    >
                        <ProFormCheckbox noStyle name="autoLogin">
                            Remember me
                        </ProFormCheckbox>
                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};

