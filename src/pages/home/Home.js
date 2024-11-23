
import React, { useEffect } from 'react';
import './Home.module.css';

import { Layout, Spin, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import * as actions from './actions/homeActions';
import FooterPage from './Footer';
import HeaderPage from './Header';
import SiderPage from './Sider';


const { Content } = Layout;


const Home = () => {
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector((state) => state.items);
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

  useEffect(() => {
    dispatch(actions.fetchItensData());
  }, [dispatch]);


  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderPage />
      <Layout>
        <HeaderPage />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', justifyContent: 'center', marginLeft: '48px' }}>
            {items.map(item => <Card item={item} />)}
          </div>
        </Content>
        <FooterPage />
      </Layout>
    </Layout>
  );
};

export default Home;
