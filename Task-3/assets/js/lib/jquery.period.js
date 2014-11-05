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

        var periodItem = el.text(data);
        var periodItemArray = data.split(',');

        
        // var dateArray = $.each(periodItemArray, function() {
                  

        //   var day = dateVal.getDate();

        //   // var arrayDays = day.map(function(el){ 
        //   //     return this;
        //   // }).get().join("\n");

        // });

        var dateArray = periodItemArray.map(function(el) {

            var dateVal = new Date(el).getDate();

            return dateVal;
        });

        console.log(dateArray);
       
          arrayMax = Math.max.apply( Math, dateArray );

        console.log(arrayMax);

          
          // var month = dateVal.getMonth();
    }
  };




})(jQuery);