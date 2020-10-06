import React, { useState } from 'react';
import './App.css';
import StaffClocker from './component/staffClocker';

function App() {
  const [getDate, setDate] = useState<string>();
  const [getTime, setTime] = useState<string>();

  const currentTime = () => {
    let date = new Date();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minute =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`;
  };

  const currentDate = () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let date = new Date();

    return `${dayNames[date.getDay()]} ${
      monthNames[date.getMonth()]
    } ${date.getDate()}`;
  };

  setInterval(() => {
    setDate(currentDate());
    setTime(currentTime());
  }, 500);

  return (
    <div className='container py-4'>
      {/* clock section */}
      <div className='clock-box effect p-2 py-md-5 mt-4'>
        <div className='row'>
          <div className='col-12'>
            <h4 className='display-3 text-center'>{getTime}</h4>
          </div>
          <div className='col-12 text-center mt-2 mb-1'>
            <h6>{getDate}</h6>
          </div>
        </div>
      </div>

      {/* welcome  */}
      <div className='row justify-content-md-center'>
        <div className='col-8'>
          <p className='text-center my-5 py-4 h3'>
            welcome back to the office. Please clock in or out
          </p>

          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <StaffClocker />
              <StaffClocker />
            </tbody>
          </table>
        </div>
      </div>

      <hr />
      <h3 className='text-center mb-5'>History</h3>

      <table className='table text-center'>
        <thead className='table-light'>
          <tr>
            <th>Staff</th>
            <th>Clocked in</th>
            <th>Clocked out</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
