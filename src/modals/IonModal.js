import React, { Component, PropTypes } from 'react';

const { func, node, string } = PropTypes;

export default class IonModal extends Component {
  static propTypes = {
    barClasses: string,
    children: node,
    customClasses: string,
    onClose: func,
    title: string,
  }

  static defaultProps = {
    barClasses: '',
    customClasses: '',
    onClose: () => {},
    title: '',
  }

  render() {
    const { barClasses, customClasses, children, onClose, title } = this.props;

    return (
      <div className="modal-slide-in-up">
        <div className="modal-backdrop active">
          <div className="modal-wrapper">
            <div className={`modal ${customClasses}`}>
              <div className={`bar bar-header bar--modal ${barClasses}`}>
                <h2 className="title">{title}</h2>
                <button className="button button-icon" onClick={onClose}>
                  <i className="icon ion-ios-close-empty" />
                </button>
              </div>
              <div className="content has-header overflow-scroll">
                <div className="padding">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
