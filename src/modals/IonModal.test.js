import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import IonModal from './IonModal';

describe('<IonModal />', () => {
  it('renders the children given to it', () => {
    const wrapper = mount(
      <IonModal>
        Test
      </IonModal>
    );

    expect(wrapper.text()).to.be.equal('Test');
  });

  it('uses the barClasses given to it', () => {
    const wrapper = mount(
      <IonModal
        barClasses="testing"
      />
    );

    expect(wrapper.find('.bar.testing')).to.be.length(1);
  });

  it('uses the customClasses given to it', () => {
    const wrapper = mount(
      <IonModal
        customClasses="testing"
      />
    );

    expect(wrapper.find('.modal.testing')).to.be.length(1);
  });

  it('uses the title given to it', () => {
    const wrapper = mount(
      <IonModal
        title="Test"
      />
    );

    expect(wrapper.text()).to.be.equal('Test');
  });

  it('calls the onClose function', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <IonModal
        onClose={spy}
      />
    );

    wrapper.find('button').simulate('click');

    expect(spy).to.have.been.calledOnce;
  });
});
