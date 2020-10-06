import React, { ReactElement } from 'react';

interface IStaffClocker {
  staff: any;
  timer: string;
}

const StaffClocker: React.FC<IStaffClocker> = ({ staff, timer }) => {
  const clocker = (event: any) => {
    const target = event.target.setAttribute('disabled', 'disabled');

    console.log(staff, timer, target);
  };
  return (
    <tr>
      <td className='staff'>Presh Onye</td>
      <td className='row justify-content-evenly'>
        <button onClick={clocker} className='btn clockin col-5'>
          clock in
        </button>
        <button onClick={clocker} className='btn clockout col-5'>
          {' '}
          clock out
        </button>
      </td>
    </tr>
  );
};

export default StaffClocker;
