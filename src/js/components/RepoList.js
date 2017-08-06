/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-ensable no-unused-vars */

const RepoList = (props) => {
  if (props.isLoaded) {
    const repos = props.repos.map(
      repo => (
        <li
          className='repo-card'
          key={repo.id}
        >
          <h2 className='repo-card--title'><Link to={`${repo.name}/commits`}>{repo.name}</Link></h2>
          <p className='repo-card--language'>{repo.language}</p>
          { repo.description ? <hr className='repo-card--rule' /> : '' }
          { repo.description ? <p className='repo-card--description'>{repo.description}</p> : '' }
          <hr className='repo-card--rule'/>
          <ul className='repo-card--counts'>
            <li className='repo-card--count'>{repo.watchers_count} watchers</li>
            <li className='repo-card--count'>{repo.forks_count} forks</li>
          </ul>
          <ul className='repo-card--links'>
            { repo.homepage ? <li className='repo-card--link'><a href={repo.homepage}>View Project</a></li> : '' }
            <li className='repo-card--link'><a className='repo-card--link' href={repo.svn_url}>Git Home</a></li>
          </ul>
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
