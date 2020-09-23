import React from 'react';
import { Card, Button, Layout } from 'antd';
import '../../components/pages/ParentDashboard/ParentDashboard.less';

const ChildCard = props => {
  return (
    <Card className="child-card">
      <Layout className="child-info">
        <img src={props.AvatarURL} alt="avatar" />
        <h2
          style={{
            fontFamily: 'Nunito, sans-serif',
            color: 'black',
            fontSize: '1.5rem',
          }}
        >
          {props.name}
        </h2>
      </Layout>
      <Button
        style={{
          backgroundColor: '#007AFF',
          color: 'white',
        }}
        type="primary"
        size="large"
        htmlType="submit"
      >
        {props.name.toUpperCase()}'S PROGRESS
      </Button>
    </Card>
  );
};

export default ChildCard;
