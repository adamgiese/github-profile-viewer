/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const UserDetails = (props) => {
  if (props.isLoaded) {
    const repos = props.repos.map(
      repo => (
        <li
          className='repo'
          key={repo.id}
        >
          <h2>{repo.name}<small>{repo.language}</small></h2>
          <div className='counts'>
            <span className='count--watchers'>{repo.watchers_count} watchers</span>
            <span className='count--forks'>{repo.forks_count} forks</span>
          </div>
          <hr />
          <p>{repo.description}</p>
          <hr />
          { repo.homepage ? <a href={repo.homepage}>View Project</a> : '' }
          <a href={repo.svn_url}>Git Home</a>
        </li>
      )
    );
    return (
      <ul className='repos-list'>
        {repos}
      </ul>
    );
  }
  return (<h3>Loading...</h3>);
};

export default UserDetails;
