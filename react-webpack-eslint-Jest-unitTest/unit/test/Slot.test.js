// Link.react.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';

import {shallow, mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import  ReactTestUtils  from  'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import Slot from './../../src/Slot'
const Child = ()=><div>child</div>
Enzyme.configure({ adapter: new Adapter() });
describe('React state render', () => {

it('renders correctly', () => {
  const component = renderer.create(
    <Slot >Facebook</Slot>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot();
});
  // it('props children render', () => {
  //   const Parent = mount(
  //     <Slot >
  //       <Child />
  //     </Slot>
  //   )
  //   expect(Parent.contains(Child)).toBe(true)
  // });
});