import { DevnotPage } from './app.po';

describe('devnot App', () => {
  let page: DevnotPage;

  beforeEach(() => {
    page = new DevnotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
