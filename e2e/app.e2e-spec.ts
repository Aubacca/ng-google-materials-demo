import { NgGoogleMaterialDemoPage } from './app.po';

describe('ng-google-material-demo App', () => {
  let page: NgGoogleMaterialDemoPage;

  beforeEach(() => {
    page = new NgGoogleMaterialDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
