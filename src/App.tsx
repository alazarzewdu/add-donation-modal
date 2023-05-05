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

        <div className='donation-text'>
          <p>Donation Date:</p>
          <p className='amount-txt'>Amount:</p>
          <p>Payment Type:</p>
          <p className='notes-txt'>Notes:</p>
        </div>
        </Space>
        
        
        <DatePicker size='small' className='date' onChange={onChange}/>

       <Input placeholder='25' size='small'className='amount'/>

       <Radio.Group onChange={onChanger} value={value} className='radio'>
      <Space direction="vertical">
        <Radio value={1}>Electronic</Radio>
        <Radio value={2}>Cash/Check</Radio>
        <Radio value={3}>In Kind</Radio>
      </Space>
    </Radio.Group>


      <TextArea rows={3} size='small' className='notes-field'
      autoSize={false}
      style={{resize: 'none'}} />
      </Modal>
    </>
  );
};

export default App
function setValue(value: any) {
  throw new Error('Function not implemented.');
}

