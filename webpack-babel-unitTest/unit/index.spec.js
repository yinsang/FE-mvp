import index from './../src'
import {expect} from 'chai'
describe('测试法返回值', ()=>{
  it('num', ()=>{
    expect(index(3)).to.be.equal(3)
  })

  it('strr', ()=>{
    expect(index('aaa')).to.be.equal('aa')
  })
})