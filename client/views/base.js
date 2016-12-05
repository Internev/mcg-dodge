angular.module('base', [])


.controller('BaseController', function ($http) {
  // Your code here Promise here!
  this.date = new Date().toJSON().slice(0,10);


  this.data = 'a';

  this.getDataz = function() {
    $http({
      method: 'GET',
      url: '/dataz',
      params: {date: this.date}
    })
    .then((resp) => {
      console.log(resp);
      this.data = resp.data;
    });
  };

});
