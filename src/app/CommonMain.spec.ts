import {CommonMain} from './CommonMain';

describe('CommonMain', function () {

  it('instantiated', function (done) {
    const a = new CommonMain();
    expect(a).toBeDefined();
    // expect(true).toBeFalsy();
    done();
  });
});
