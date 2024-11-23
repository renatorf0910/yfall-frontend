import {
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
import {
    ProFormText
} from '@ant-design/pro-components';
import { theme } from 'antd';



const LoginEmail = () => {
    const { token } = theme.useToken();

    return (
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
            <a
                style={{
                    float: 'right',
                }}
            >
                Forget the password
            </a>
        </>
    )
}

export default LoginEmail