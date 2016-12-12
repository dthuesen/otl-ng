import { OtlNgPage } from './app.po';

describe('otl-ng App', function() {
  let page: OtlNgPage;

  beforeEach(() => {
    page = new OtlNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
