const data = [
  { id: 1, name: 'Bob Smith', email: 'bobsmith@gmail.com' },
  { id: 2, name: 'John Doe', email: 'jon_doe@gmail.com' },
  { id: 3, name: 'Mary Wilson', email: 'mwilson@gmail.com' },
  { id: 4, name: 'Cheryl McCormick', email: 'cheryl.mccormick@gmail.com' },
];

const users = async () => {
  return data;
};

const user = async ({ id }) => {
  return data.find(obj => obj.id === id);
};

const addUser = async (userData) => {
  const id = Math.round(Math.random() * 100000);
  data.push({ ...userData, id });
  return { createdId: id };
};

export {
  users,
  user,
  addUser,
};