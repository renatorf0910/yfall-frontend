import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormDatePicker, ProFormText, ProFormTextPassword } from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';
import { useDispatch } from 'react-redux';
import * as actions from './actions/userActions'; // Ajuste o caminho conforme necessário

const UserCreate = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        dispatch(actions.createUser(values))
            .then(() => {
                message.success('User created successfully!');
                form.resetFields();
            })
            .catch((error) => {
                message.error(`Failed to create user: ${error}`);
            });
    };

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                style={{ maxWidth: 600, margin: '0 auto' }}
            >
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
                <ProFormText
                    name="adress"
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className="prefixIcon" />,
                    }}
                    placeholder="ADDRESS"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your address!',
                        },
                    ]}
                />
                <ProFormText
                    name="cpf"
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className="prefixIcon" />,
                    }}
                    placeholder="CPF"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your CPF!',
                        },
                    ]}
                />
                <ProFormText
                    name="phone"
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className="prefixIcon" />,
                    }}
                    placeholder="PHONE"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your phone number!',
                        },
                    ]}
                />
                <ProFormDatePicker
                    name="age"
                    fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className="prefixIcon" />,
                    }}
                    placeholder="AGE"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your age!',
                        },
                    ]}
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

                <Form.Item>
                    <Button type="primary" htmlType="submit" block size="large">
                        REGISTER
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UserCreate;
