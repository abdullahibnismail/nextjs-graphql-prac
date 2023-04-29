import { Button, Space } from 'antd';



function AddButton() {
    const styles = {
        button:{
            background:'#000000',
            color:'#FFFFFF',
            borderRadius:'2px',
        }
    }
    return (
        <Space wrap>
            <Button style={styles.button}>Add Check In</Button>
        </Space>
    );
}

export default AddButton;