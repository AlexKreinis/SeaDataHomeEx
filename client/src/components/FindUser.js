import React, { useState } from 'react';
import './Form.css';
import UserCard from './UserCard.js';
import { findUser } from '../utilities/ServerReq.js';

const FindUser = () => {
  const [userId, setUserId] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const onChange = e => {
    setUserId(e.target.value);
  };
  const onSubmit = async e => {
    try {
      e.preventDefault();
      const { data } = await findUser(userId);
      setUserData({
        id: userId,
        firstName: data.firstName,
        email: data.email,
        lastName: data.lastName,
        phone: data.phone
      });
      setShowCard(true);
    } catch (err) {
      setError('User not found');
    }
  };

  return (
    <div>
      {showCard ? (
        <UserCard showCard={setShowCard} userData={userData} />
      ) : (
        <form className="form-box" onSubmit={onSubmit}>
          <h2> Find A User</h2>
          <div className="inputBox">
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={onChange}
              required
            />
            <label htmlFor="UserId">User Id</label>
          </div>
          <div className="inputBox">
            <button>Submit</button>
          </div>
          <div className="inputBox" style={{ color: 'red' }}>
            {error}
          </div>
        </form>
      )}
    </div>
  );
};

export default FindUser;
