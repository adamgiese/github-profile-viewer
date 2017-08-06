/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import { fetchGist, fetchUserDetails } from '../actions';
/* eslint-ensable no-unused-vars */

export default class Repo extends React.Component {
  componentDidMount() {
    store.dispatch(fetchGist(this.props.match.params.gist));
    if (this.props.user && !this.props.user.details) {
      store.dispatch(fetchUserDetails(this.props.user.username));
    }
  }

  render() {
    const displayTitle = this.props.gist && this.props.gist.files ? Object.keys(this.props.gist.files)[0] : '';
    const files = this.props.gist && this.props.gist.files ? Object.values(this.props.gist.files).map(
      file => (
        <li
          className='file'
          key={file.filename}
        >
          <h3 className='file--name'>{file.filename}</h3>
          <p className='file--language'>{file.language}</p>
          <pre className='file--content'><code>{file.content}</code></pre>
        </li>
      )
    ) : '';
    return (
      <div className='repo'>
        <Link className='back-link' to='/'>&laquo; Back</Link>
        <h2>{ displayTitle }</h2>
        <ul className='files'>{files}</ul>
      </div>
    );
  }
}
