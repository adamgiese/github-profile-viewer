/* eslint-disable no-unused-vars */
import React from 'react';
import store from '../store';
import { fetchGist } from '../actions';
/* eslint-ensable no-unused-vars */

export default class Repo extends React.Component {
  componentDidMount() {
    store.dispatch(fetchGist(this.props.match.params.gist));
  }

  render() {
    const displayTitle = this.props.gist && this.props.gist.files ? Object.keys(this.props.gist.files)[0] : '';
    const files = this.props.gist && this.props.gist.files ? Object.values(this.props.gist.files).map(
      file => (
        <li
          className='file'
          id={file.filename}
        >
          <h3 className='file--name'>{file.filename}</h3>
          <p className='file--language'>{file.language}</p>
          <pre className='file--content'><code>{file.content}</code></pre>
        </li>
      )
    ) : '';
    return (
      <div className='repo'>
        <h2>{ displayTitle }</h2>
        <ul className='files'>{files}</ul>
      </div>
    );
  }
}
