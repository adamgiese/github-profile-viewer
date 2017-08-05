/* eslint-disable no-unused-vars */
import React from 'react';
import CommitsContainer from '../containers/CommitsContainer';
import store from '../store';
import { fetchCommits } from '../actions';
/* eslint-ensable no-unused-vars */

export default class Repo extends React.Component {
  componentDidMount() {
    if (this.props.user) {
      store.dispatch(fetchCommits(this.props.user, this.props.match.params.repo));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user !== this.props.user) {
      store.dispatch(fetchCommits(nextProps.user, this.props.match.params.repo));
    }
  }

  render() {
    return (
      <div className='repo'>
        <CommitsContainer />
      </div>
    );
  }
}
