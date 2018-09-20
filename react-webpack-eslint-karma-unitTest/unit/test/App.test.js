import {expect} from 'chai'
import React from 'react';
import App from './../../src/App.jsx'
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('react state', ()=>{
  it('state default', ()=>{
    expect(shallow(<App/>).state('framework')).to.be.equal('react')
  })
})