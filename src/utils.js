export function getTime(dateString) {
  return dateString.split('T').pop().substr(0, 5);
}

const current = new Date().toJSON().split('T').shift();

export function getDate(dateString) {
  const date = dateString.split('T').shift();

  if (current === date) {
    return 'Today';
  }

  return date;
}

const types = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

export function getType(typeId) {
  return types[typeId % types.length];
}
