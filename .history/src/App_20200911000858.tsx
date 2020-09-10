import React from 'react';
import './App.css';

function App() {
  const currentTime = () => {
    let date = new Date();

    return `${date
      .getHours()
      .toFixed(2)} ${date.getMinutes()} ${date.getSeconds()}`;
  };

  console.log(currentTime());

  return (
    <div className='container py-4'>
      {/* clock section */}
      <div className='clock-box effect p-2 py-md-5 mt-4'>
        <div className='row'>
          <div className='col-12'>
            <h4 className='display-3 text-center'>
              {currentTime().toString()}
            </h4>
          </div>
          <div className='col-12 text-center mt-2 mb-1'>
            <h6>Thu. september 10</h6>
          </div>
        </div>
      </div>

      {/* welcome  */}
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
          <tr>
            <td className='staff'>Presh Onye</td>
            <td className='row justify-content-evenly'>
              <button className='btn clockin col-5'> clock in</button>
              <button className='btn clockout col-5'> clock out</button>
            </td>
          </tr>
          <tr>
            <td className='staff'>Presh Onye</td>
            <td className='row justify-content-evenly'>
              <button className='btn clockin col-5'> clock in</button>
              <button className='btn clockout col-5'> clock out</button>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h3 className='text-center mb-5'>History</h3>

      <table className='table'>
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
