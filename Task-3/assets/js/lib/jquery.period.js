(function($){
  jQuery.fn.period = function(options){
    var getDataInterval, $that;

    $that = $(this);
   
    $that.each(function(){
      allDates = getDataInterval($(this));
      interval = convertDateToInterval(allDates);
      setPeriod($(this), interval)
    }); 

    function getDataInterval(element){
      return element.data("interval");
    }

    function convertDateToInterval(data){
      var locale = "en-us",
      somearray  = data.split(','),
      dateArray  =  getDateArray(somearray),
      max        = getMaxValArrayMilisecs(dateArray),
      min        = getMinValArrayMilisecs(dateArray),
      converting = convertData(max, min),
      return convertDate(max, min, converting);
    }

    function setPeriod(el, interval){   
      periodItem = el.text(interval);
    }

    function getDateArray(array) {
      newarray = array.map(function(el) {
          return Date.parse(el);
      });
      return newarray
    }

    function getMaxValArrayMilisecs(el){
      return Math.max.apply( Math, el ); 
    }

    function getMinValArrayMilisecs(el){
      return Math.min.apply( Math, el ); 
    }

    function convertDate(max, min, converting) {
     
        var dataValMin = new Date(min),
            dataValMax = new Date(max);

        var dateFirst  = dataValMin.getDate(),
            dateLast   = dataValMax.getDate(),
            monthFirst = dataValMin.getMonth(),
            monthLast  = dataValMax.getMonth(),
            yearFirst  = dataValMin.getFullYear(),
            yearLast   = dataValMax.getFullYear(),
        nameMonthFirst = dataValMin.toLocaleString(locale, { month: "short" }),
        nameMonthLast  = dataValMax.toLocaleString(locale, { month: "short" }) + " ";

        var nameDay = (converting > 1) ? "days" : "day",
            nameMonthLast  = (monthFirst == monthLast) ? '' : nameMonthLast;
            if(yearFirst == yearLast){
               yearFirst = ''  
               yearLast = ''
            }

        return nameMonthFirst+ " " +dateFirst+ " " +yearFirst+ " - "  +nameMonthLast + dateLast+ " " +yearLast+ ", "  +converting +" "+ nameDay;
    }

    function convertData(max, min) {
      var milisecsToDays = 86400000; 
      return Math.round((max-min)/milisecsToDays);
    }

  };

})(jQuery);