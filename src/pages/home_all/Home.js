import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Card, Button, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../home_seller/actions/homeActions';
import './Home.module.css';
import { useNavigate } from 'react-router-dom';


const HomeAll = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { Header, Footer, Content } = Layout;
    const { loading, items, error } = useSelector((state) => state.items);
    const { Title } = Typography;

    useEffect(() => {
        dispatch(actions.fetchItensDataItens());
    }, [dispatch]);

    const handleLoginClick = () => {
        navigate('/login');
    };


    return (
        <>
            <Layout className="layout">
                <Header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <Title level={3} style={{ color: 'white', margin: '0', marginTop: '8px' }}>
                            <video
                                src="/assets/images/logo.mp4"
                                width="55"
                                height="70"
                                autoPlay
                                loop
                                muted
                                style={{
                                    borderRadius: '100%',
                                }}
                            />
                        </Title>
                    </div>

                    <div style={{ textAlign: 'end', marginBottom: '0' }}>
                        <Button type="primary" onClick={handleLoginClick}>
                            Login
                        </Button>
                    </div>
                </Header>


                <Content style={{ padding: '50px 0', margin: '100px' }}>
                    <div className="site-layout-content">
                        <Row gutter={[16, 16]} justify="center">
                            {items.map(product => (
                                <Col key={product?.id} xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        hoverable
                                        cover={
                                            <img alt={product?.name}
                                                src={`${process.env.REACT_APP_API_IMAGE_LINK}${product?.item_image}`}
                                                style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                                        actions={[<Button type="primary" icon={<ShoppingCartOutlined />}>Comprar</Button>]}
                                    >
                                        <Card.Meta title={product?.name} description={`R$ ${product?.price?.toFixed(2)}  ${product?.slug}`} />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    YFL - {new Date().getFullYear()}
                </Footer>
            </Layout>
        </>
    )
}

export default HomeAll;

