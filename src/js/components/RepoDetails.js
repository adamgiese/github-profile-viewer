/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-ensable no-unused-vars */

const RepoDetails = props => (
  <div className='repo-details'>
    <Link className='back-link' to='/'>&laquo; Back</Link>
    <h2 className='repo-details--title'>{props.details.name}</h2>
  </div>
);

export default RepoDetails;
