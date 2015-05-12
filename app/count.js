if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var counter = start;
      setInterval(function() {
        count++;

        if(count === end) {
          break;
        }
      }, 100);

      return counter;
    }
  };
});
