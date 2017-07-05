import { A4AnimationsPage } from './app.po';

describe('a4-animations App', () => {
  let page: A4AnimationsPage;

  beforeEach(() => {
    page = new A4AnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
