import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import { handleChange, toggleInput } from './actions';
import { getListItems } from '../List/actions';

class Form extends PureComponent {
  input = React.createRef();

  handleChange = ({ target: { value } }) => {
    this.props.dispatch(handleChange(value));
  };

  toggleInput = () => {
    if (!this.props.isOpen) {
      this.input.current.focus();
    }
    this.props.dispatch(toggleInput(!this.props.isOpen));
  };

  submit = (e) => {
    e.preventDefault();
    this.props.dispatch(getListItems(this.props.text));
  };

  render() {
    const { text, isOpen, fullHeight } = this.props;
    return (
      <div className={`wrapper ${fullHeight ? 'fullHeight' : ''}`}>
        <a
          className="white-text"
          href="https://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
        >
          Click here for a random article
        </a>
        <br/>
        <form onSubmit={this.submit} className={isOpen ? 'open' : ''}>
          <input ref={this.input} type="text" value={text} onChange={this.handleChange} />
          <div className="eks" onClick={this.toggleInput} />
        </form>
        <p className={`white-text ${fullHeight ? '' : 'hide'}`}>
          Click icon to search
        </p>
      </div>
    );
  }
}

export default connect(state => ({
  text: state.form.text,
  isOpen: state.form.isOpen,
  fullHeight: state.form.fullHeight,
}))(Form);


Form.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  fullHeight: PropTypes.bool.isRequired,
};
