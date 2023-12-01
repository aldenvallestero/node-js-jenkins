const { sendMessage } = require('../dist/index');

describe('Unit Test', () => {
  test('Send Message - 200', () => {
    expect(sendMessage()).toBe(200);
  })
})
