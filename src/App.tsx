import { useState } from 'react'
import { Button, Modal, Input, Radio } from 'antd';
import {DatePicker, Space } from 'antd';
import type {DatePickerProps, RadioChangeEvent} from 'antd';


import './App.css'
import person from './assets/person.png'



const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [value, setValue] = useState(1);

const onChange: DatePickerProps['onChange'] = (date, dateString) => 
  console.log(date, dateString);

 const onChanger = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  

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
          <p className='amount-text'>Amount:</p>
          <p>Payment Type:</p>
          <p>Notes:</p>
        </div>
        </Space>
        
        <div className="donation-input">
        <DatePicker size='small' className='date' onChange={onChange}/>

       <Input placeholder='25' size='small'className='amount'/>

       <Radio.Group onChange={onChanger} value={value} className='radio'>
      <Space direction="vertical">
        <Radio value={1}>Electronic</Radio>
        <Radio value={2}>Cash/Check</Radio>
        <Radio value={3}>In Kind</Radio>
      </Space>
    </Radio.Group>

        </div>
    

      </Modal>
    </>
  );
};

export default App
function setValue(value: any) {
  throw new Error('Function not implemented.');
}

