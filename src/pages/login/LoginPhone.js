import {
    LockOutlined,
    MobileOutlined
} from '@ant-design/icons';
import {
    ProFormCaptcha,
    ProFormText
} from '@ant-design/pro-components';
import { message } from 'antd';


const LoginPhone = () => {
    return (
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

export default LoginPhone