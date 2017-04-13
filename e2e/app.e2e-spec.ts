import { EasternFoundryFEPage } from './app.po';

describe('eastern-foundry-fe App', () => {
  let page: EasternFoundryFEPage;

  beforeEach(() => {
    page = new EasternFoundryFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
