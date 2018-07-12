import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { wikiUrlById } from '../constants';

import './style.css';

class List extends PureComponent {
  render() {
    const { items } = this.props;
    return (
      <div className="wrapper">
        <ul>
          {items.map(({ title, text, id }) => (
            <a target="_blank" href={`${wikiUrlById}${id}`} key={id}>
              <li>
                <h1>{title}</h1>
                <p>{text}</p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  items: state.list.items,
}))(List);


List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
