import React from 'react';

interface IStaffClocker {
  staff: any;
  timer: string;
}

const StaffClocker: React.FC<IStaffClocker> = ({ staff, timer }) => {
  const clockin = () => {
    console.log(staff, timer);
  };
  return (
    <tr>
      <td className='staff'>Presh Onye</td>
      <td className='row justify-content-evenly'>
        <button onClick={clockin} className='btn clockin col-5'>
          {' '}
          clock in
        </button>
        <button className='btn clockout col-5'> clock out</button>
      </td>
    </tr>
  );
};

export default StaffClocker;
