/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const Commits = (props) => {
  const commits = props.commits ? props.commits.map(
    commit => (
      <li
        className='commit'
        key={commit.sha}
      >
        <h2 className='commit--sha'>{commit.sha}</h2>
        <p className='commit--message'>{commit.commit.message}</p>
        <p className='commit--author'>{commit.commit.author.name}</p>
      </li>
    )
  ) : '';
  return (
    <ul className='commits'>
      {commits}
    </ul>
  );
};

export default Commits;

