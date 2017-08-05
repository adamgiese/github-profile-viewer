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
            className='gist--card'
            key={gist.id}
          >
            <h2>{displayTitle}</h2>
            <p>{gist.language}</p>
            { gist.description ? <hr /> : '' }
            { gist.description ? <p className='gist-description'>{gist.description}</p> : '' }
            <Link to={`gist/${gist.id}`}>View Gist &raquo;</Link>
          </li>
        );
      }
    );
    return (
      <ul className='gists'>
        {gists}
      </ul>
    );
  }
  return (<h3>Loading...</h3>);
};

export default GistList;
