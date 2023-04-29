import Add_CheckIn from "@/components/Add_CheckIn";
import AppHeader from "@/components/AppHeader";
import CheckIn_Detail from "@/components/CheckIn_Detail";
import CheckIns from "@/components/CheckIns";
import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {

  const layout = {
      boxSizing:'border-box',
      fontFamily:'Roboto',
      fontStyle:'normal'
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout style={layout}>
        <AppHeader/>
      <Content >
        <CheckIns/>
      </Content>
    </Layout>
    </Space>
  );
}