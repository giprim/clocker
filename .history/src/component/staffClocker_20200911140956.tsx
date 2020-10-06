import React, { useRef } from 'react';

interface IStaffClocker {
  staff: any;
  timer: string;
}

const StaffClocker: React.FC<IStaffClocker> = ({ staff, timer }) => {
  const btn = useRef(null);
  const clocker = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(staff, timer);
  };
  return (
    <tr>
      <td className='staff'>Presh Onye</td>
      <td className='row justify-content-evenly'>
        <button ref={btn} onClick={clocker} className='btn clockin col-5'>
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
