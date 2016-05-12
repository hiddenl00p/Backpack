import React from 'react';
import classNames from 'classnames/bind';
import {slugify} from './functions.js';

export default class FormGroup extends React.Component {

  render() {

    const classes = classNames('form-group', 'question', {
      active: this.props.active
    });

    const children = React.Children.map(this.props.children, child => {

      // pass name to input field
      if(['Input', 'MultipleChoice'].indexOf(child.type.name) > -1 ){
        return React.cloneElement(child, {
          name: this.props.name
        })
      }
      return child
    });

    return (
      <fieldset onClick={this.props.onClick} id={slugify(this.props.name)} className={classes}>
        {children}
      </fieldset>
    );
  }
}
