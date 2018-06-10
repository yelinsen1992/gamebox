
var test = {};
test.install = function (Vue, options) {
    Vue.prototype.$msg = 'Hello World';
    Vue.prototype.$show = function(){
        console.log(555)
    }
  }
  module.exports = test;