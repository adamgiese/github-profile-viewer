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
        <h3 className='commit--sha'>{commit.sha}</h3>
        <p className='commit--message'>{commit.commit.message}</p>
        <p className='commit--author'>{commit.commit.author.name}</p>
      </li>
    )
  ) : false;

  console.log(commits);
  const commitList =
    commits.length === 0 || !commits ?
      <p className='commits--error'>No commits in the past month.</p> :
      <ul className='commits--list'>{commits}</ul>;
  return (
    <div className='commits'>
      <h2 className='commits--title'>Commits</h2>
      {commitList}
    </div>
  );
};

export default Commits;

