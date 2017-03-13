import { Ng2lastfmPage } from './app.po';

describe('ng2lastfm App', () => {
  let page: Ng2lastfmPage;

  beforeEach(() => {
    page = new Ng2lastfmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
