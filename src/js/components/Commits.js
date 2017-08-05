/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-ensable no-unused-vars */

const Commits = (props) => {
  const commits = props.commits ? props.commits.map(
    commit => (
      <li
        className='commit'
        key={commit.sha}
      >
        <h3 className='commit--sha'>{commit.sha}</h3>
        <p className='commit--message'>{commit.commit.message}</p>
        <p className='commit--author'>{commit.commit.author.name}</p>
      </li>
    )
  ) : '';
  return (
    <div className='commits'>
      <Link className='back-link' to='/'>&laquo; Back</Link>
      <h2 className='commits--title'>Commits</h2>
      <ul className='commits--list'>
        {commits}
      </ul>
    </div>
  );
};

export default Commits;

