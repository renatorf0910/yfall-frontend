import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProForm, ProFormDatePicker, ProFormText } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './actions/userActions';
import axios from 'axios';

const UserCreate = ({ onFinish }) => {
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState();

    const handleSubmit = (values) => {
        const dict_test = {
            "email": values.email,
            "username": values.username,
            "password": values.password
        }
        dispatch(actions.createUser(dict_test))
            .then(() => {
                message.success('User created successfully!');
                axios.post(`${process.env.REACT_APP_API_BASE_URL}/login/`, {
                    email: values.email,
                    password: values.password,
                })
                    .then(response => {
                        message.success('Login successful!');
                        setCurrentUser(true);
                    })
                    .catch(error => {
                        console.log(`Failed to log in: ${error.response.data.detail || error.message}`);
                    });
            })
            .catch((error) => {
                console.log(`Failed to create user: ${error}`);
            });
    };

    if (currentUser) {
        return (
            <div>
                <div className="center">
                    <h2>You're logged in!</h2>
                </div>
            </div>
        );
    }

    return (
        <ProForm onFinish={handleSubmit} submitter={false}>
            <ProFormText
                name="username"
                fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className="prefixIcon" />,
                }}
                placeholder="FULL NAME"
                rules={[{ required: true, message: 'Please enter your full name!' }]}
            />
            <ProFormText
                name="email"
                fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className="prefixIcon" />,
                }}
                placeholder="E-MAIL"
                rules={[{ required: true, message: 'Please enter your email address!' }]}
            />
            {/* <ProFormText
                name="address"
                fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className="prefixIcon" />,
                }}
                placeholder="ADDRESS"
                rules={[{ required: true, message: 'Please enter your address!' }]}
            />
            <ProFormText
                name="cpf"
                fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className="prefixIcon" />,
                }}
                placeholder="CPF"
                rules={[{ required: true, message: 'Please enter your CPF!' }]}
            />
            <ProFormText
                name="phone"
                fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className="prefixIcon" />,
                }}
                placeholder="PHONE"
                rules={[{ required: true, message: 'Please enter your phone number!' }]}
            />
            <ProFormDatePicker
                name="age"
                fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className="prefixIcon" />,
                }}
                placeholder="AGE"
                rules={[{ required: true, message: 'Please enter your age!' }]}
            /> */}
            <ProFormText.Password
                name="password"
                fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className="prefixIcon" />,
                }}
                placeholder="PASSWORD"
                rules={[{ required: true, message: 'Please enter your password!' }]}
            />
            <ProFormText.Password
                name="confirmPassword"
                fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className="prefixIcon" />,
                }}
                placeholder="CONFIRM PASSWORD"
                rules={[
                    { required: true, message: 'Please confirm your password!' },
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
            <Button type="primary" htmlType="submit" block size="large">
                Register
            </Button>
        </ProForm>
    );
};

export default UserCreate;
