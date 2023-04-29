import { useState } from 'react';
import { Button, Modal,Input, Space } from 'antd';





function Add_CheckIn() {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    const styles={
        input:{
            border:'1px solid #D9D9D9',
            borderRadius:'2px',
            padding:'8px 12px',
            margin:'10px 0px 10px 0px'
        },
        div:{
            padding:'16px 0px',
        },
        button:{
            background:'#000000',
            color:'#FFFFFF',
            borderRadius:'2px',
            boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.043)'
        },
        cbutton:{
            boxShadow: 'inset 0px -1px 0px #F0F0F0',
            background:'#FFFFFF',
            color:'#000000D9',
            borderRadius:'2px',
        }
    }

    return (
        <>
      {/* <Button style={styles.button} onClick={showModal}>
        Open Modal
      </Button> */}
      <Space wrap>
            <Button style={styles.button} onClick={showModal}>Add Check In</Button>
        </Space>
      <Modal title="New Checkin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} style={styles.cbutton}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} style={styles.button}>
            Create CheckIn
          </Button>,
        ]}
      >
        <div style={styles.div}>
            <Input placeholder="Check In Title"  style={styles.input}/>
            <Input placeholder="Image Url" style={styles.input}/>
        </div>
      </Modal>
    </>
    );
}

export default Add_CheckIn;