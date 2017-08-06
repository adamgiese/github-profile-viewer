/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const UserDetails = (props) => {
  if (props.isLoaded) {
    const company = props.details.company ? <p className='user-details--company'>{props.details.company}</p> : '';
    const bio = props.details.bio ? <p className='user-details--bio'>{props.details.bio}</p> : '';
    return (
      <div className='user-details'>
        <img src={props.details.avatar_url} />
        <div className='user-details--content'>
          <p className='user-details--name'>{props.details.name}</p>
          <p className='user-details--location'>{props.details.location}</p>
          {company}
          {bio}
        </div>
      </div>
    );
  }
  return (<h3>Loading...</h3>);
};

export default UserDetails;
