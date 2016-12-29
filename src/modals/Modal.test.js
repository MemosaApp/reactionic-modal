import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Modal from './Modal';

describe('<Modal />', () => {
  it('opens if the initial props say to open', () => {
    const wrapper = mount(
      <Modal isOpen />
    );

    expect(wrapper.state().isOpen).to.be.true;
  });

  it('opens if the props change to open', () => {
    const wrapper = mount(<Modal />);

    wrapper.setProps({
      isOpen: true,
    });

    expect(wrapper.state().isOpen).to.be.true;
  });

  it('closes if the props change to not open', done => {
    const wrapper = mount(<Modal isOpen />);

    wrapper.setProps({
      isOpen: false,
    });

    expect(wrapper.state().isOpen).to.be.true;

    setTimeout(() => {
      expect(wrapper.state().isOpen).to.be.false;
      done();
    }, 210);
  });

  it('is closed if the initial props say to not open', () => {
    const wrapper = mount(<Modal />);

    expect(wrapper.state().isOpen).to.be.false;
  });
});
