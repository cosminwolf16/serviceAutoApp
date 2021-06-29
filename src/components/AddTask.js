import { useState } from 'react';

// import external libraries
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const AddTask = ({ onAdd }) => {
  // declare state/behaviour of elements
  const [text, setText] = useState('');
  const [reminder, setReminder] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [comments, setComments] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const formatedDate = moment(startDate).format('DD/MM/YYYY');
    // save to database
    onAdd({ text, formatedDate, reminder, time, comments });

    // reset back to inital values
    setText('');
    setStartDate(new Date());
    setTime("")
    setComments("")
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Servicii</label>
        <input
          required
          type='text'
          placeholder='Adaugă Servicii'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Data</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className='form-control'>
        <label>Ora</label>
        <input
          type='text'
          value={time}
          placeholder="Ora"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Mentiuni</label>
        <textarea
          value={comments}
          placeholder="Mentiuni/Nr. Telefon"
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <div className='form-control form-control-ckeck'>
        <label>Setază Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Salvează' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
