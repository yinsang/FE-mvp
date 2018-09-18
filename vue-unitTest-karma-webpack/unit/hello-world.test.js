
// import helloWorld from './../src/hello-world.vue'
import count from './count.js'
import { expect } from 'chai'
describe('a', () => {
  it('ccc', () => {
    expect(count(2)).to.equal(2)
  })
})
// describe('测试props', () => {
//   it('测试string', () => {
//     const msg = 'afas;afa'
//     const wrapper = shallowMount(helloWorld, {
//       propData: {
//         msg
//       }
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
// })
