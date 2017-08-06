/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-ensable no-unused-vars */

const RepoDetails = props => (
  <div className='repo-details'>
    <Link className='back-link' to='/'>&laquo; Back</Link>
    <h2 className='repo-details--title'>{props.details.name}</h2>
    <p className='repo-details--language'>{props.details.language}</p>
    <p className='repo-details--description'>{props.details.description}</p>
    <a href="https://github.com/adamgiese/react-boilerplate" className='repo-details--link'>Link to Github &raquo;</a>
  </div>
);

export default RepoDetails;
