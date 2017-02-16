import { browser, element, by } from 'protractor';

export class Geomotiv.TaskPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('geo-root h1')).getText();
  }
}
