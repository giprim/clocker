export const currentTime = () => {
  let date = new Date();
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let minute =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`;
};

export const currentDate = () => {
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
