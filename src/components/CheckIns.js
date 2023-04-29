import { useState } from 'react';

import { Space, Table, Tag,Drawer,Image } from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Owner',
    dataIndex: 'Owner',
    key: 'Owner',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    render: (Status) => {return (
                    <>
                    <Tag color="#79FFE1" style={{color:'#000000D9', fontFamily: 'Menlo'}}  key={Status}>
                        {Status}
                    </Tag>
                    </>
                  );}
  },
  {
    title: 'Created at',
    dataIndex: 'CreatedAt',
    key: 'CreatedAt',
    // render: (CreatedAt) => {CreatedAt}
  },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
];
const data = [
  {
    key: '1',
    name: 'CheckIn Name',
    Owner: 'Jim Green',
    Status: 'CHECKED IN',
    CreatedAt: '12th Nov 2022',
    imgurl:'/assets/image.png.png',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function CheckIns(){
    const styles = {
        space:{
            width: '100%', 
            padding:'0px 40px',
            background: '#FAFAFA'
        },
        table:{
            color:'#000000D9',
            padding:'16px',
            border:'0px solid #0000000F'
        },
        text:{
            color: '#000000',
            fontSize: '30px',
            fontWeight: '500',
          },
    }
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const showDrawer = (record) => {
        setSelectedRow(record);
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return(
        <>
        <div direction='vertical' style={styles.space} >
            <Table columns={columns} dataSource={data}  style={styles.table} onRow={(record) => ({ onClick: () => showDrawer(record) })}/>
        </div>
         <>
         <Drawer title="Details" placement="right" onClose={onClose} open={open}>
            {selectedRow && (
                <>
                    <p style={styles.text}>{selectedRow.name}</p>
                    {/* <Image src={'assets/image.png.png'} alt="CheckIn Image"/> */}
                    <Image src={selectedRow.imgurl} alt="CheckIn Image"/>
                </>
             )}
             
             
         </Drawer>
     </>
     </>
    )
}
export default CheckIns;
