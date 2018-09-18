import double from './../src/double'
import {expect} from 'chai'
describe('test double js', ()=>{
  it('test num', ()=>{
    expect(double(2)).to.be.equal(4)
    expect(double(3)).to.be.equal(5)
    // 这里测试一个错误用例
  })
})