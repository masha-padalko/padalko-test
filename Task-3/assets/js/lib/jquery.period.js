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

            var milliseconds  = Date.parse(el);

            return milliseconds;
        });

        //min max value
          arrayMax = Math.max.apply( Math, dateArray );
          arrayMin = Math.min.apply( Math, dateArray );

        //period dates 
        var constConvertMilisec = 86400000; 
        var countDays = Math.round((arrayMax-arrayMin)/constConvertMilisec);

        
        var nameDay;

        if(countDays>1){
          nameDay = "days";
        }
        else{
          nameDay = "day";
        }

        //echo period
        var periodItem = el.text("Aug" +arrayMin+ "-" +arrayMax+ "," +countDays +" "+ nameDay+ "");

    }
  };




})(jQuery);