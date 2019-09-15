import React from 'react';
import PropTypes from 'prop-types';
import user from '../img/userimg.png';
import './UserCard.css';
import { Link } from 'react-router-dom';
const UserCard = ({ showCard, userData }) => {
  const onClick = () => {
    showCard(false);
  };
  return (
    <div className="userCard">
      <img src={user} alt="" />
      <div className="credentials">{userData.name}</div>
      <div className="credentials">{userData.lastName}</div>
      <div className="credentials">{userData.email}</div>
      <div className="credentials">{userData.phone}</div>
      <button>
        <Link
          to={{
            pathname: '/update',
            state: {
              userData
            }
          }}
        >
          Update User
        </Link>
      </button>
      <button onClick={onClick}>Find Another User</button>
    </div>
  );
};

UserCard.propTypes = {
  userData: PropTypes.object.isRequired,
  showCard: PropTypes.func.isRequired
};

export default UserCard;
