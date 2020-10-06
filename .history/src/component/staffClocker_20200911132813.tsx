import React from 'react';

const StaffClocker = () => {
  return (
    <tr>
      <td className='staff'>Presh Onye</td>
      <td className='row justify-content-evenly'>
        <button className='btn clockin col-5'> clock in</button>
        <button className='btn clockout col-5'> clock out</button>
      </td>
    </tr>
  );
};

export default StaffClocker;
