import { useState } from 'react'
import { Button, Modal } from 'antd';
import {DatePicker, Space } from 'antd';
import type {DatePickerProps} from 'antd';


import './App.css'
import person from './assets/person.png'



const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const onChange: DatePickerProps['onChange'] = (date, dateString) => 
  console.log(date, dateString);

  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const profile_detail = ['Lee, Michelle', <br/>, '1488 Olympus Ave', <br/>, 'Berkley, CA 94708'];


  return (
    <>
      <Button className='btn-dashed' type="dashed" onClick={showModal}>
        + Add 
      </Button>
      <Modal title="Add Donation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <div className='profile'>
          <img src={person} className='person'></img>
          <p className='profile_detail'>{profile_detail}</p>
        </div>

        <Space direction="vertical">

        <div className='donation-text'>
          <p>Donation Date:</p>
          <p>Amount:</p>
          <p>Payment Type:</p>
          <p>Notes:</p>
        </div>
        </Space>
        
        <div className="donation-input">
        <DatePicker size='middle' className='date' onChange={onChange}/>

        </div>
    

      </Modal>
    </>
  );
};

export default App
