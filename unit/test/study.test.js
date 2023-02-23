
function add (a,b){
  return a+b
}
import axios from 'axios'
jest.mock('axios');
describe('study jest', () => {
  test('result white also be a constructor',  () => {
    const mockFn = jest.fn((val)=>val);
    // console.log(mockFn());

// const a = new mockFn();
// const b = new mockFn();
mockFn(222)

    expect(mockFn.mock.calls).toEqual([[222]])
//     expect(mockFn.mock.instances[1] === b).toBeTruthy()
    mockFn.mockReset()
    // expect(mockFn.mock.calls).toEqual([[222]])
    // console.log(mockFn.mock.instances);
    console.log('bb', mockFn());
    // expect(mockFn.mock.instances[0] === a).toBeTruthy()
    // expect(mockFn.mock.instances[1] === b).toBeTruthy()

  });
});