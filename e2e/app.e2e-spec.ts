import { CalcAppPage } from './app.po';

describe('calc-app App', () => {
  let page: CalcAppPage;

  beforeEach(() => {
    page = new CalcAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
