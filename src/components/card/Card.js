import React, { useEffect } from 'react';
import './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card as AntCard, Spin } from 'antd';
import * as actions from './actions/cardActions';

const { Meta } = AntCard;

const Card = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.card);

    useEffect(() => {
        dispatch(actions.fetchCardData());
    }, [dispatch]);

    if (loading) {
        return <Spin size="large" />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <AntCard
                style={{ width: 300, marginTop: '24px' }}
                cover={
                    <img
                        alt="example"
                        src={data?.imageUrl || "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={data?.avatar || "https://api.dicebear.com/7.x/miniavs/svg?seed=8"} />}
                    title={data?.title || "Card title"}
                    description={data?.description || "This is the description"}
                />
            </AntCard>
        </>

    );
};

export default Card;