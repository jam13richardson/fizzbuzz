const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});



// describe('add', () => {
//   it('adds 2 and 2', () => {
//     // TODO: write test
//   });
// });

// // Let's imagine for a second that the function add exists, and that we can call it inside the REPL.
// add(2, 2); // given we call `add` with 2 and 2, it should return 4

// //using matchers
// 'test('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
//   });

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false