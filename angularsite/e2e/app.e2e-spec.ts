import { AngularsitePage } from './app.po';

describe('angularsite App', function() {
  let page: AngularsitePage;

  beforeEach(() => {
    page = new AngularsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
