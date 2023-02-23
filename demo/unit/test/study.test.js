
function add (a,b){
  return a+b
}
// describe('describe order', ()=>{
//   console.log(1);
//   describe('add', ()=>{
//     console.log(2);
//   })
  
//   it('it ', ()=>{
//     console.log(3);
//     expect(add(1,2)).toBe(3)
//     console.log(4);
//   })
//   console.log(5);
// })
// describe.each()
// describe('add', ()=>{
//   it('it ', ()=>{
//     expect(add(1,2)).toBe(3)
//   })
// })
// describe.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [2, 2, 4],
// ])('.add(%i, %j)', (a, b, expected) => {
//   // console.log(a,b,expected);
//   test('a',()=>{
//     expect(a+b).toBe(expected)
//   })
// });
// describe.skip('my beverage', () => {
//   console.log('firest desc');
//   test('is delicious', () => {
//     console.log('first');
//     expect(add(1,2)).toBe(3);
//   });

//   test('is not sour', () => {
//     console.log('object');
//     expect(add(1,23)).toBe(24);
//   });
//   test.todo('todo sth')
// });
// describe('my other beverage', () => {
//   console.log('after');

//   test('is not souraaaaa', () => {
//     console.log('object33');
//     expect(add(1,23)).toBe(24);
//   });
//   // ... will be skipped
// });
describe('study jest', () => {
  test('result white also be a constructor',  () => {
    const fn = jest.fn((val)=>{
      return val*2
    })
    fn(2)
    // this underline make expect wrong
    var f = new fn();
    expect(fn.mock.results).toEqual([{
      type: 'return',
      value: 4,
    }]);
  });
});