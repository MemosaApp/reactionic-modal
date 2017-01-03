# reactionic-modal

[![CircleCI](https://circleci.com/gh/MemosaApp/reactionic-modal.svg?style=svg)](https://circleci.com/gh/MemosaApp/reactionic-modal) [![npm version](https://badge.fury.io/js/reactionic-modal.svg)](https://badge.fury.io/js/reactionic-modal)

Custom modal that mimics the one in reactionic

## Why

The modals provided by reactionic do not pass events correctly, making it so that
when you use:

```js
//...
render() {
  var demoModal = <DemoModal {...this.props} />;

  return (
    <IonButton color="dark" type="outline" onClick={() => this.context.ionShowModal(demoModal)}>Show modal</IonButton>
  )
}
//...

var DemoModal = React.createClass({
  render() {
    return (
      <IonModal {...this.props}
                customTemplate={false}
                title="Some modal"
                barClasses="bar-dark"
                customClasses="">
        <div>Content goes here</div>
      </IonModal>
    );
  }
});
```

Events for form inputs do not work as expected, making the file picker input
not work at all.

## Installing

```
yarn add reactionic-modal
```

## Usage

Bare bones usage:

```js
<Modal
  isOpen={this.state.isOpen}
  onRequestClose={this.handleClose}
>
  {content}
</Modal>
```

Ion usage:

```js
import { Modal, IonModal } from 'reactionic-modal';

<Modal
  isOpen={this.state.isOpen}
  onRequestClose={this.handleClose}
>
  <IonModal
    title="Some modal"
    barClasses="bar-dark"
    customClasses=""
    onClose={this.handleClose}
  >
    {content}
  </IonModal>
</Modal>
```
