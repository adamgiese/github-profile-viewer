/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-ensable no-unused-vars */

const GistList = (props) => {
  if (props.isLoaded) {
    const gists = props.gists.map(
      (gist) => {
        const displayTitle = Object.keys(gist.files)[0];

        return (
          <li
            className='gist-card'
            key={gist.id}
          >
            <h2 className='gist-card--title'>{displayTitle}</h2>
            <p className='gist-card--language'>{gist.language}</p>
            { gist.description ? <p className='gist-card--description'>{gist.description}</p> : '' }
            <Link className='gist-card--link' to={`gist/${gist.id}`}>View Gist &raquo;</Link>
          </li>
        );
      }
    );
    return (
      <div className='gists'>
        <h2 className='gists--title'>Gists</h2>
        <ul className='gists--list'>
          {gists}
        </ul>
      </div>
    );
  }
  return (<h3>Loading...</h3>);
};

export default GistList;
