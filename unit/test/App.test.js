// Link.react.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';

import {shallow, mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import  ReactTestUtils  from  'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import App from './../../src/App'

Enzyme.configure({ adapter: new Adapter() });
describe('React state render', () => {
  it('top level div', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.type).not.toBe('span');
  });
  it('className', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.props.className.split(' ').includes('welcome-framework')).toBe(true);
  });
  
  it('should render state, value be react', () => {
    const testInstance = ReactTestUtils.renderIntoDocument(<App/>);
    expect(testInstance.state.framework).toBe('react')
    expect(testInstance.state.framework).not.toBe('vue')
  });
  it('right state after setState', () => {
    const wrapper = shallow(<App/>);
    console.log(wrapper.props);
    expect(wrapper.state().framework).toBe('react')
    wrapper.find('.btn').simulate('click');
    expect(wrapper.state().framework).toBe('vue')
  });
});