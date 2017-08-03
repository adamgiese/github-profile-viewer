/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const UserDetails = (props) => {
  if (props.isLoaded) {
    const company = props.company ? <p className='user-company'>{props.company}</p> : '';
    const bio = props.bio ? <p className='user-bio'>{props.bio}</p> : '';
    return (
      <div className='user-details'>
        <img src={props.image_src} />
        <p className='user-name'>{props.display_name}</p>
        <p className='user-location'>{props.location}</p>
        {company}
        {bio}
      </div>
    );
  }
  return (<h3>Loading...</h3>);
};

export default UserDetails;
