(function($){
  jQuery.fn.period = function(options){
    var getDataInterval, insertPeriod, options, $that;

    $that = $(this);

        
    //options
    options = $.extend({}, options );  

    $that.each(function(){

      dataInterval = getDataInterval($(this));
      insertPeriod($(this), dataInterval);
    }); 

    function getDataInterval(element){
      var attrInner = element.data("interval");
      return attrInner;
    }

    function insertPeriod(el, data){   

        var periodItemArray = data.split(',');

        //date
        var dateArray = periodItemArray.map(function(el) {

            var dateVal = new Date(el).getDate();

            return dateVal;
        });

        //month
        var monthArray = periodItemArray.map(function(el) {

            var dateMonth = new Date(el).getMonth();

            return dateMonth;
        });
       
        //min max value
          arrayMax = Math.max.apply( Math, dateArray );
          arrayMin = Math.min.apply( Math, dateArray );

        //period dates  
        var countDays = arrayMax-arrayMin;

        //get month value from number
        $.each(monthArray, function () {
            getMonthName = function (v) {
                var n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return n[v]

            }
            var getMonthN = getMonthName(this);
            console.log(getMonthN);
        });

        //echo period
        var periodItem = el.text("Aug" +arrayMin+ "-" +arrayMax+ "," +countDays+ " days");

    }
  };




})(jQuery);