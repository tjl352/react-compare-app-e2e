const assert = require('assert');
const homePage = require('../pages/home.page');

describe('react-compare-app page', () => {
  var appFruits = [];

  beforeEach(() => {
    arrFruits = [
      $('//*[@id="root"]/div/div/div/div[2]/div[1]/div/div[2]'),
      $('//*[@id="root"]/div/div/div/div[2]/div[2]/div/div[2]'),
      $('//*[@id="root"]/div/div/div/div[2]/div[3]/div/div[2]'),
      $('//*[@id="root"]/div/div/div/div[2]/div[4]/div/div[2]')
    ];
    homePage.open();
  });

  it('should have the right title', () => {
    assert.strictEqual(
      homePage.getPageTitle(),
      'React App',
      'title not correct'
    );
  });

  it('should display table when all 4 items selected', () => {
    //click all
    for (let i = 0; i < arrFruits.length; i++) {
      arrFruits[i].click();
    }
    //homePage.clickAllFruits();
    assert($('div.row.compare').isDisplayed());

    //assert table header names
    assert.equal($('//tr/th[2]').getText(), 'Cherry', 'not cherry');
    assert.equal($('//tr/th[3]').getText(), 'Orange', 'not orange');
    assert.equal($('//tr/th[4]').getText(), 'Nuts', 'not nuts');
    assert.equal($('//tr/th[5]').getText(), 'Strawberry', 'not strawberry');

    //assert all prices
    const actualPrices = $$('td.text-center');
    const expectedPrices = ['$1.99', '$2.99', '$1.00', '$1.49'];

    for (let i = 0; i < actualPrices.length; i++) {
      assert.equal(
        actualPrices[i].getText(),
        expectedPrices[i],
        'price not correct'
      );
    }

    //assert all colors
    const expectedColors = [
      'bg-red',
      'bg-green',
      'bg-blue',
      'bg-green',
      'bg-blue',
      'bg-red',
      'bg-blue'
    ];
    const actualColors = $$('tr.colors td span');
    for (let i = 0; i < expectedColors.length; i++) {
      assert.equal(
        actualColors[i].getAttribute('class'),
        expectedColors[i],
        'table colors not in order'
      );
    }

    //assert all conditions
    const expectedConditions = ['Fresh', 'Frozen', 'Frozen', 'Fresh'];
    const actualConditions = $$('tr.condition td');
    for (let i = 0; i < expectedConditions.length; i++) {
      assert.equal(
        actualConditions[i].getText(),
        expectedConditions[i],
        'condition not correct'
      );
    }
  });

  it('should display table when any 3 items selected', () => {
    //all but cherry
    arrFruits[1].click();
    arrFruits[2].click();
    arrFruits[3].click();
    assert($('div.row.compare').isDisplayed(), 'all but cherry');
    browser.refresh();

    //all but orange
    arrFruits[0].click();
    arrFruits[2].click();
    arrFruits[3].click();
    assert($('div.row.compare').isDisplayed(), 'all but orange');
    browser.refresh();

    //all but nuts
    arrFruits[0].click();
    arrFruits[1].click();
    arrFruits[3].click();
    assert($('div.row.compare').isDisplayed(), 'all but nuts');
    browser.refresh();

    //all but strawberry
    arrFruits[0].click();
    arrFruits[1].click();
    arrFruits[2].click();
    assert($('div.row.compare').isDisplayed(), 'all but strawberry');
    browser.refresh();
  });

  it('should display table when any 2 items selected', () => {
    //browser.url('https://react-compare-app.surge.sh/');

    //cherry/orange
    arrFruits[0].click();
    arrFruits[1].click();
    assert($('div.row.compare').isDisplayed(), 'cherry/orange');
    browser.refresh();

    //cherry/nuts
    arrFruits[0].click();
    arrFruits[2].click();
    assert($('div.row.compare').isDisplayed(), 'cherry/nuts');
    browser.refresh();

    //cherry/strawberry
    arrFruits[0].click();
    arrFruits[3].click();
    assert($('div.row.compare').isDisplayed(), 'cherry/strawberry');
    browser.refresh();

    //orange/nuts
    arrFruits[1].click();
    arrFruits[2].click();
    assert($('div.row.compare').isDisplayed(), 'orange/nuts');
    browser.refresh();

    //orange/strawberry
    arrFruits[1].click();
    arrFruits[3].click();
    assert($('div.row.compare').isDisplayed(), 'orange/stawberry');
    browser.refresh();

    //nuts/strawberry
    arrFruits[2].click();
    arrFruits[3].click();
    assert($('div.row.compare').isDisplayed(), 'nuts/strawberry');
    browser.refresh();
  });
});
