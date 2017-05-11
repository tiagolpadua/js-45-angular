import { CaelumpicPage } from './app.po';

describe('caelumpic App', () => {
  let page: CaelumpicPage;

  beforeEach(() => {
    page = new CaelumpicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
