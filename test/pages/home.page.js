module.exports = {
  getPageTitle: function() {
    return browser.getTitle();
  },
  open: function() {
    browser.url('https://react-compare-app.surge.sh/');
  }
};
