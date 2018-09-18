import helloWorld from './../src/hello-world.vue'
import {expect} from 'chai'
import Vue from 'vue'
describe('test hello world', ()=>{
  it('test num', ()=>{
    expect(Math.abs(3)).to.be.equal(3)
    // 这里测试
    expect(typeof helloWorld.created).to.be.equal('function')
    //这里的created是个空functin

  })
  it('created is a function', ()=>{
    expect(typeof helloWorld.created).to.be.equal('function')
    //这里的created是个空functin

  })
  it('data is hello!', ()=>{
    const defaultData = helloWorld.data()
    expect(defaultData.message).to.be.equal('hello!')
  })
  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Constructor = Vue.extend(helloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).to.be.equal('hello world')
  })
})