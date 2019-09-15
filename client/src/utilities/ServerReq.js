import axios from 'axios';

export const updateUser = async (userId, userData) => {
  console.log('entered updatedUser');
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  const body = JSON.stringify(userData);
  try {
    const res = await axios.put(`/api/users/update/${userId}`, body, config);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async userData => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  const body = JSON.stringify(userData);
  try {
    const res = await axios.post('/api/users/register', body, config);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const findUser = async userId => {
  try {
    const res = await axios.get(`/api/users/finduser/${userId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
