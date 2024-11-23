import {
    LockOutlined,
    MobileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
    ProFormDatePicker
} from '@ant-design/pro-components';
import { Tabs, message, theme } from 'antd';
import { useState } from 'react';

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
                    submitter={{
                        searchConfig: {
                            submitText: 'SING IN',
                        },
                    }}
                >
                    <Tabs
                        centered
                        activeKey={loginType}
                        onChange={(activeKey) => setLoginType(activeKey)}
                    >
                        <Tabs.TabPane key="account" tab="E-MAIL" />
                        <Tabs.TabPane key="phone" tab="PHONE" />
                        <Tabs.TabPane key="register" tab="SING UP" />
                    </Tabs>
                    {loginType === 'account' && (
                        <>
                            <ProFormText
                                name="username"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className="prefixIcon" />,
                                }}
                                placeholder="USERNAME"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter username!',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className="prefixIcon" />,
                                    strengthText:
                                        'Password should contain numbers, letters and special characters, at least 8 characters long.',
                                    statusRender: (value) => {
                                        const getStatus = () => {
                                            if (value && value.length > 12) {
                                                return 'ok';
                                            }
                                            if (value && value.length > 6) {
                                                return 'pass';
                                            }
                                            return 'poor';
                                        };
                                        const status = getStatus();
                                        if (status === 'pass') {
                                            return (
                                                <div style={{ color: token.colorWarning }}>
                                                    Strength: Medium
                                                </div>
                                            );
                                        }
                                        if (status === 'ok') {
                                            return (
                                                <div style={{ color: token.colorSuccess }}>
                                                    Strength: strong
                                                </div>
                                            );
                                        }
                                        return (
                                            <div style={{ color: token.colorError }}>Strength: weak</div>
                                        );
                                    },
                                }}
                                placeholder="PASSWORD"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            />
                        </>
                    )}
                    {loginType === 'phone' && (
                        <>
                            <ProFormText
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MobileOutlined className="prefixIcon" />,
                                }}
                                name="mobile"
                                placeholder="PHONE"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your mobile phone number!',
                                    },
                                    {
                                        pattern: /^1\d{10}$/,
                                        message: 'The mobile phone number format is wrong!',
                                    },
                                ]}
                            />
                            <ProFormCaptcha
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className="prefixIcon" />,
                                }}
                                captchaProps={{
                                    size: 'large',
                                }}
                                placeholder="PASSWORD"
                                captchaTextRender={(timing, count) => {
                                    if (timing) {
                                        return `${count} ${'Get verification code'}`;
                                    }
                                    return 'Get verification code';
                                }}
                                name="captcha"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter the verification code!',
                                    },
                                ]}
                                onGetCaptcha={async () => {
                                    message.success('Obtained verification code successfully! The verification code is: 1234');
                                }}
                            />
                        </>
                    )}
                    {loginType === 'register' && (
                        <>
                            <ProFormText
                                name="name"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className="prefixIcon" />,
                                }}
                                placeholder="FULL NAME"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your full name!',
                                    },
                                ]}
                            />
                            <ProFormText
                                name="email"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className="prefixIcon" />,
                                }}
                                placeholder="E-MAIL"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email address!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                ]}
                            />
                            <ProFormDatePicker
                                name="age"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className="prefixIcon" />,
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your age!',
                                    },
                                ]}
                                placeholder="AGE"
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className="prefixIcon" />,
                                }}
                                placeholder="PASSWORD"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="confirmPassword"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className="prefixIcon" />,
                                }}
                                placeholder="CONFIRM PASSWORD"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords do not match!'));
                                        },
                                    }),
                                ]}
                            />
                        </>
                    )}
                    <div
                        style={{
                            marginBlockEnd: 24,
                        }}
                    >
                        <ProFormCheckbox noStyle name="autoLogin">
                            STAY CONNECTED
                        </ProFormCheckbox>
                        <a
                            style={{
                                float: 'right',
                            }}
                        >
                            Forget the password
                        </a>
                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};
