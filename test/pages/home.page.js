module.exports = {
  getArrFruits: function() {
    var arrFruits = [
      $('//*[@id="root"]/div/div/div/div[2]/div[1]/div/div[2]'),
      $('//*[@id="root"]/div/div/div/div[2]/div[2]/div/div[2]'),
      $('//*[@id="root"]/div/div/div/div[2]/div[3]/div/div[2]'),
      $('//*[@id="root"]/div/div/div/div[2]/div[4]/div/div[2]')
    ];
    return arrFruits;
  },
  clickAllFruits: function(getArrFruits) {
    for (let i = 0; i < getArrFruits.length; i++) {
      getArrFruits[i].click();
    }
  },
  getPageTitle: function() {
    return browser.getTitle();
  },
  open: function() {
    browser.url('https://react-compare-app.surge.sh/');
  }
};
