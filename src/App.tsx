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

  const { TextArea } = Input;
  

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
      <Modal title="Add Donation" 
      className='btn' 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      okButtonProps={{ className: 'custom-ok-button' }}
      cancelButtonProps={{ className: 'custom-cancel-button' }}
      okText="Save"
  cancelText="Cancel">

        <div className='profile'>
          <img src={person} className='person'></img>
          <p className='profile_detail'>{profile_detail}</p>
        </div>

        <Space direction="vertical">

      <div className="donation">
        <div className="d-txt">
          <p>Donation Date:</p>
        </div>
          <div className="d-input">
          <DatePicker size='small' className='date' onChange={onChange}/>
          </div>
      </div>

      <div className="amount">
        <div className="a-txt">
          <p>Amount:</p>
        </div>
        <div className="a-input">
          <Input placeholder='25' size='small'className='a-i'/>
        </div>
      </div>
      
      <div className="payment">
        <div className="p-txt">
          <p>Payment Type:</p>
        </div>
        <div className="p-input">
          <Radio.Group onChange={onChanger} value={value} className='radio'>
      <Space direction="vertical">
        <Radio value={1}>Electronic</Radio>
        <Radio value={2}>Cash/Check</Radio>
        <Radio value={3}>In Kind</Radio>
      </Space>
    </Radio.Group>
        </div>
        
      </div>
          
          <p >Notes:</p>
      
        </Space>
        



      <TextArea rows={3} size='small' className='notes-field'
      autoSize={false}
      style={{resize: 'none'}} />
      </Modal>
    </>
  );
};

export default App

