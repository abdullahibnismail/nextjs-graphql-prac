import { Layout,Image,Typography,Avatar } from 'antd';
import AddButton from './Button';
import Add_CheckIn from './Add_CheckIn';

const { Text, Link } = Typography;

const { Header } = Layout;

function AppHeader() {
  const styles = {
    header: {
      display:'flex',
      justifyContent:'space-between',
      borderBottom: '1px solid #f0f0f0',
      padding: '0 40px',
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    logo: {
      color: '#000000',
      fontSize: '24px',
      fontWeight: '500',
    },
    link: {
      color:'#000000D9',
      padding:'0px 20px'
    },
    img: {
      padding:'0px 20px'
    },
    header1: {
      display:'flex',
      justifyContent:'space-between',
      borderBottom: '1px solid #f0f0f0',
      padding: '114px 40px',
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    text:{
      color: '#000000',
      fontSize: '30px',
      fontWeight: '500',
    },
    p:{
      fontSize: '14px',
      fontWeight: '400',
      lineHeight:'22px'
    },
  };
  return (
    <>
    <Header style={styles.header}>
      <Text style={styles.logo}>AAA</Text>
      <div> 
      <Link href="" target="_blank" style={styles.link}>
        Feedback
      </Link>
      <Link href="" target="_blank" style={styles.link}>
        Support
      </Link>
      {/* <Image src="assets/avatar.png" alt="My Image" style={styles.img} /> */}
      <Avatar src={<Image src={'assets/avatar.png'} alt="avatar" />} />
      </div>
    </Header>

    <Header style={styles.header1}>
      <div>
        <Text style={styles.text}>CheckIns</Text>
        <div style={styles.p}>Lorem ipsus dolor sit amen, something important to say here</div>
      </div>
      <div> 
        {/* <AddButton/> */}
        <Add_CheckIn/>
      </div>
  </Header>
  </>
  )
}

export default AppHeader;