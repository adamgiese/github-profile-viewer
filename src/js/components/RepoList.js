/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-ensable no-unused-vars */

const RepoList = (props) => {
  if (props.isLoaded) {
    const repos = props.repos.map(
      repo => (
        <li
          className='repo--card'
          key={repo.id}
        >
          <h2><Link to={`${repo.name}/commits`}>{repo.name}</Link></h2>
          <p>{repo.language}</p>
          <div className='counts'>
            <span className='count--watchers'>{repo.watchers_count} watchers</span>
            <span className='count--forks'>{repo.forks_count} forks</span>
          </div>
          { repo.description ? <hr /> : '' }
          { repo.description ? <p className='repo-description'>{repo.description}</p> : '' }
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

export default RepoList;
