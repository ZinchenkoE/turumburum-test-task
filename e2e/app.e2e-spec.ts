import { TurumburumTestTaskPage } from './app.po';

describe('turumburum-test-task App', function() {
  let page: TurumburumTestTaskPage;

  beforeEach(() => {
    page = new TurumburumTestTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
