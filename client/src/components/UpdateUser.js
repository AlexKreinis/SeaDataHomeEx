import React, { useState, useEffect } from 'react';
import { updateUser } from '../utilities/ServerReq.js';
import './Form.css';
const UpdateUser = props => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    password2: ''
  });
  const [msg, setMsg] = useState('');
  const { email, firstName, lastName, phone, password, password2 } = formData;
  const userData = props.props.location.state.userData;

  useEffect(() => {
    setFormData({
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone
    });
  }, [userData]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setFormData({ ...formData, msg: 'Passwords do not match' });
    } else {
      try {
        const { data } = await updateUser(userData.id, formData);
        setMsg(data.msg);
        setTimeout(() => {
          setMsg('');
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="form-box">
      <h2> Update User</h2>

      <form className="form" onSubmit={onSubmit}>
        <div className="inputBox">
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
          <label htmlFor="firstName">name</label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
          <label htmlFor="lastName">lastname</label>
        </div>

        <div className="inputBox">
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={onChange}
            required
          />
          <label htmlFor="phone">phone</label>
        </div>

        <div className="inputBox">
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
          <label htmlFor="password">New Password</label>
        </div>

        <div className="inputBox">
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
          <label htmlFor="password2">Repeat New Password</label>
        </div>
        <div className="inputBox">
          <button>Submit</button>
        </div>
        <div className="messages">{msg}</div>
      </form>
    </div>
  );
};

export default UpdateUser;
