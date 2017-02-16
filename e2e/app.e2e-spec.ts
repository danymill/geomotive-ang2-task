import { Geomotiv.TaskPage } from './app.po';

describe('geomotiv.task App', function() {
  let page: Geomotiv.TaskPage;

  beforeEach(() => {
    page = new Geomotiv.TaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('geo works!');
  });
});
