import { useState } from 'react';
import { Button, Drawer,Image } from 'antd';





function CheckIn_Detail() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const styles ={
        text:{
            color: '#000000',
            fontSize: '30px',
            fontWeight: '500',
          },
    }
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
              Open
            </Button>
            <Drawer title="Details" placement="right" onClose={onClose} open={open}>
                <p style={styles.text}>Checkin name</p>
                <Image src={'assets/image.png.png'} alt="CheckIn Image"/>
            </Drawer>
        </>
    );
}

export default CheckIn_Detail;