import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card as AntCard, Avatar } from 'antd';
import React from 'react';
import './Card.module.css';

const { Meta } = AntCard;

const Card = (props) => {
    const { item } = props

    return (
        <>
            <AntCard
                style={{ width: 300, marginTop: '24px' }}
                cover={
                    <img
                        alt={item?.name}
                        src={`${process.env.REACT_APP_API_IMAGE_LINK}${item?.item_image}`}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}

                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={item?.avatar || "https://api.dicebear.com/7.x/miniavs/svg?seed=8"} />}
                    title={item?.name}
                    description={item?.slug} // mudar para description
                />
            </AntCard>
        </>

    );
};

export default Card;
